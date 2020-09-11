import { composeUtil } from "./utils/composeUtil";

export const w = composeUtil("width");
export const minW = composeUtil("minWidth");
export const maxW = composeUtil("maxWidth");
export const h = composeUtil("height");
export const minH = composeUtil("minHeight");
export const maxH = composeUtil("maxHeight");
export const boxSize = composeUtil("width", "height");
