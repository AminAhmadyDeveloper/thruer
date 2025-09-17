import { useEffect } from "react";

export const useInjectScript = (
  script: string,
  selectors: keyof HTMLElementTagNameMap = "head",
  options?: Partial<HTMLScriptElement>
) => {
  useEffect(() => {
    if (globalThis.window !== undefined) {
      const head = document.querySelector(selectors);
      const _script = document.createElement("script");

      if (options) {
        const writableProps = [
          "src",
          "type",
          "async",
          "defer",
          "crossOrigin",
          "integrity",
          "noModule",
          "referrerPolicy",
          "text",
          "event",
          "htmlFor",
          "charset",
        ] as const;

        type WritableProperty = (typeof writableProps)[number];
        const keys = Object.keys(options) as WritableProperty[];
        for (const key of keys) {
          if (writableProps.includes(key)) {
            // @ts-expect-error: dynamic assignment
            _script[key] = options[key];
          }
        }
      }

      _script.innerHTML = script;
      if (head) {
        head.append(_script);
      }
    }
  }, [options, script, selectors]);
};
