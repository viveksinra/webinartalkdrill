import { useMemo } from "react";

export function useExample(value: string) {
  return useMemo(() => value.toUpperCase(), [value]);
}


