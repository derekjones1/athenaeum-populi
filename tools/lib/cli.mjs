/**
 * The one command-line parser for the tools under `tools/`.
 *
 * Three parsers existed, of three different rigours, and the weakest had the
 * bug the other two documented: `args.find((a) => !a.startsWith('--'))` takes
 * a flag's VALUE as the positional argument, so `--min-verified 3160` alone
 * made `3160` the content root and the run died on `Content root not found:
 * 3160`; and an unknown flag was silently ignored, so a misspelled
 * `--min-verifed 3160` would disable a ratchet while the summary still said
 * the run passed. `parseReplayArgs` (verify-replay) and `parseLedgerArgs`
 * (the answer ledger) each solved both, differently. This is their superset,
 * and every tool that takes a flag goes through it.
 *
 * Contract:
 *   - `commands`, when given, is the required first token (`check`, `merge`…).
 *   - `valueFlags` take a value as `--name value` or `--name=value`; the
 *     value may not itself begin with `--`.
 *   - `boolFlags` take no value; `--name` sets true.
 *   - anything else beginning with `--` is an error, never a boolean.
 *   - bare tokens are positionals, at most `positional.max` of them, and one
 *     too many names the one already taken so the caller sees which token
 *     was mistaken for a second root.
 */
export function parseCliArgs(argv, {
  commands = null, valueFlags = [], boolFlags = [], positional: positionalSpec = {},
} = {}) {
  const { max = Infinity, name: positionalName = 'argument' } = positionalSpec;
  const wantsValue = new Set(valueFlags);
  const known = new Set([...valueFlags, ...boolFlags]);
  let command = null;
  let i = 0;
  if (commands) {
    command = argv[0];
    if (!command || !commands.includes(command)) {
      throw new Error(`command must be one of: ${commands.join(', ')}`);
    }
    i = 1;
  }
  const positional = [];
  const flags = new Map();
  for (; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      if (positional.length >= max) {
        throw new Error(`unexpected argument ${JSON.stringify(token)} (the ${positionalName} is already ${JSON.stringify(positional[0])})`);
      }
      positional.push(token);
      continue;
    }
    const eq = token.indexOf('=');
    const flag = eq === -1 ? token.slice(2) : token.slice(2, eq);
    if (!known.has(flag)) throw new Error(`unknown flag --${flag}`);
    if (eq !== -1) {
      flags.set(flag, token.slice(eq + 1));
      continue;
    }
    if (!wantsValue.has(flag)) {
      flags.set(flag, true);
      continue;
    }
    const value = argv[i + 1];
    if (value === undefined || value.startsWith('--')) throw new Error(`--${flag} needs a value`);
    flags.set(flag, value);
    i += 1;
  }
  return {
    command,
    positional,
    flag: (flag) => (flags.has(flag) ? flags.get(flag) : null),
    bool: (flag) => flags.get(flag) === true,
  };
}

/**
 * A value flag that must be a whole number — every `--min-*` floor and
 * `--max-*` ceiling. Returns null when the flag is absent, so a tool can tell
 * "no floor requested" from "floor of zero".
 */
export function integerFlag(cli, flag) {
  const written = cli.flag(flag);
  if (written === null) return null;
  if (!/^\d+$/.test(String(written))) {
    throw new Error(`--${flag} needs a whole number, got ${JSON.stringify(written)}`);
  }
  return Number(written);
}
