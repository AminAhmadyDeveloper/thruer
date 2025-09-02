export function parseEmptyJSON(text: null | string | undefined): unknown {
  if (!text) {
    return undefined;
  }
  return JSON.parse(text);
}

export function stringifyJSON<T>(
  value: { toJSON(): T } | T,
): undefined extends T ? string | undefined : string {
  return JSON.stringify(value);
}
