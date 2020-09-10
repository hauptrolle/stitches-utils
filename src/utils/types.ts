import { ICssPropToToken } from "@stitches/core";

export type ValueOf<T> = T[keyof T];
export type TypedValue<T, P> = {
  [K in keyof ICssPropToToken<T>]: K extends P ? ICssPropToToken<T>[K] : never;
}[keyof ICssPropToToken<T>];
