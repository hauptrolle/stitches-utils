# stitches-utils
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
| btrr         | borderTopRightRadius                                 |
| bblr         | borderBottomLeftRadius                               |
| bbrr         | borderBottomRightRadius                              |
| w            | width                                                |
| minW         | minWidht                                             |
| maxW         | maxWidth                                             |
| h            | height                                               |
| minH         | minHeight                                            |
| maxH         | maxHeight                                            |
| boxSize      | width, height                                        |

## Custom utils:

It's also possible to build custom utils by using the `composeUtil` function.

```jsx
import { createStyled } from "@stitches/react";
import { composeUtil } from "stitches-utils";

const size = composeUtil("width", "height");

export const { styled, css } = createStyled({
  utils: {
    size,
  },
});
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.hauptrolle.me"><img src="https://avatars0.githubusercontent.com/u/1164541?v=4" width="100px;" alt=""/><br /><sub><b>Achim Rolle</b></sub></a><br /><a href="https://github.com/hauptrolle/stitches-utils/commits?author=hauptrolle" title="Code">💻</a> <a href="https://github.com/hauptrolle/stitches-utils/commits?author=hauptrolle" title="Documentation">📖</a> <a href="#example-hauptrolle" title="Examples">💡</a> <a href="https://github.com/hauptrolle/stitches-utils/pulls?q=is%3Apr+reviewed-by%3Ahauptrolle" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!