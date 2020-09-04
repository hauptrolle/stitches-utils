# stitches-utils

> Helpful stitches utilities like `marginY`, `marginX`, `square` etc. combined in one package

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
