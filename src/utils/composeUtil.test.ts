import { createCss, createTokens, IAtom } from "@stitches/core";
import { composeUtil } from "./composeUtil";
import { testConfig } from "./testUtils";

describe("composeUtil", () => {
  it("should be initiated correctly", () => {
    expect(composeUtil("maxWidth")).not.toThrow();
  });

  it("should create util with single property", () => {
    const maxW = composeUtil("maxWidth");

    const tokens = createTokens(testConfig.tokens);
    const css = createCss({ tokens, utils: { maxW } }, null);

    const { atoms } = css({ maxW: "1px" }) as any;

    expect(atoms).toHaveLength(1);
  });

  it("should create util with multiple properties", () => {
    const mx = composeUtil("marginLeft", "marginRight");

    const tokens = createTokens(testConfig.tokens);
    const css = createCss({ tokens, utils: { mx } }, null);

    const { atoms } = css({ mx: "1px" }) as any;

    expect(atoms).toHaveLength(2);
  });

  it("should apply basic values to composed properties", () => {
    const mx = composeUtil("marginLeft", "marginRight");
    const tokens = createTokens(testConfig.tokens);
    const css = createCss({ tokens, utils: { mx } }, null);
    const [marginRightAtom, marginLeftAtom] = (css({ mx: "1px" }) as any)
      .atoms as IAtom[];

    expect(marginRightAtom.id).toBe("marginrightinitial");
    expect(marginRightAtom.value).toBe("1px");

    expect(marginLeftAtom.id).toBe("marginleftinitial");
    expect(marginLeftAtom.value).toBe("1px");
  });

  it("should apply tokens to composed properties", () => {
    const mx = composeUtil("marginLeft", "marginRight");

    const tokens = createTokens(testConfig.tokens);
    const css = createCss({ tokens, utils: { mx } }, null);
    const [marginRightAtom, marginLeftAtom] = (css({ mx: "$1" }) as any)
      .atoms as IAtom[];

    expect(marginRightAtom.id).toBe("marginrightinitial");
    expect(marginRightAtom.value).toBe("var(--space-1)");

    expect(marginLeftAtom.id).toBe("marginleftinitial");
    expect(marginLeftAtom.value).toBe("var(--space-1)");
  });
});
