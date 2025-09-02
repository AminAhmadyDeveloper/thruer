import { useMemo } from "react";

export const useSsr = () => {
  const isDOM = useMemo(() => {
    return (
      globalThis.window !== undefined &&
      globalThis.document &&
      globalThis.document.documentElement
    );
  }, []);

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  };
};
