# stitches-utils

> Helpful stitches utilities like `marginY`, `marginX` etc. combined in one package

![GitHub release](https://img.shields.io/github/release/hauptrolle/stitches-utils.svg) ![issues](https://img.shields.io/github/issues/hauptrolle/stitches-utils)

---

## Installation:

`yarn add stitches-utils`

or

`nom install stitches-utils`

## Usage:

Import all utils

```jsx
import { createStyled } from "@stitches/react";
import * as utils from "stitches-utils";

export const { styled, css } = createStyled({
  utils,
});
```

Import specific utils

```jsx
import { createStyled } from "@stitches/react";
import { mx, my } from "stitches-utils";

export const { styled, css } = createStyled({
  utils: {
    mx,
    my,
  },
});
```

## Utils overview:

| Utility      | Properties                                           |
| ------------ | ---------------------------------------------------- |
| m            | marginTop, marginRight, marginBottom, marginLeft     |
| mt           | marginTop                                            |
| mr           | marginRight                                          |
| mb           | marginBottom                                         |
| ml           | marginLeft                                           |
| mx, marginX  | marginLeft, marginRight                              |
| my, marginY  | marginTop, marginBottom                              |
| p            | paddingTop, paddingRight, paddingBottom, paddingLeft |
| pt           | paddingTop                                           |
| pr           | paddingRight                                         |
| pb           | paddingBottom                                        |
| pl           | paddingLeft                                          |
| px, paddingX | paddingLeft, paddingRight                            |
| py, paddingY | paddingTop, paddingBottom                            |
| br           | borderRadius                                         |
| btlr         | borderTopLeftRadius                                  |
| bblr         | borderBottomLeftRadius                               |
| w            | width                                                |
| minW         | minWidht                                             |
| maxW         | maxWidth                                             |
| h            | height                                               |
| minH         | minHeight                                            |
| maxH         | maxHeight                                            |
| boxSize      | width, height                                        |
