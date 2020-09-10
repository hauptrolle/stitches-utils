import { TConfig, Properties, TRecursiveCss } from "@stitches/core";
import { TypedValue } from "./types";

export const composeUtil = <P extends keyof Properties>(...properties: P[]) => <
  T extends TConfig
>(
  _: T
) => (value: TypedValue<T, P> | Properties[P]): TRecursiveCss<T> =>
  properties.reduce(
    (final, cssProp) => ({
      ...final,
      [cssProp]: value,
    }),
    {}
  );
