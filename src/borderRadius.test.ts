import { createCss, IAtom } from "@stitches/core";
import { br, btlr, btrr, bbrr, bblr } from "./borderRadius";

describe("borderRadius utils", () => {
  it("should create br util correctly", () => {
    const css = createCss({ utils: { br } }, null);

    const [bbrr, btrr, btlr, bblr] = (css({ br: "1px" }) as any)
      .atoms as IAtom[];

    expect(bbrr.id).toBe("borderbottomrightradiusinitial");
    expect(bbrr.value).toBe("1px");

    expect(btrr.id).toBe("bordertoprightradiusinitial");
    expect(btrr.value).toBe("1px");

    expect(btlr.id).toBe("bordertopleftradiusinitial");
    expect(btlr.value).toBe("1px");

    expect(bblr.id).toBe("borderbottomleftradiusinitial");
    expect(bblr.value).toBe("1px");
  });

  it("should create btlr util correctly", () => {
    const css = createCss({ utils: { btlr } }, null);

    const [atom] = (css({ btlr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("bordertopleftradiusinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create btrr util correctly", () => {
    const css = createCss({ utils: { btrr } }, null);

    const [atom] = (css({ btrr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("bordertoprightradiusinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create bblr util correctly", () => {
    const css = createCss({ utils: { bblr } }, null);

    const [atom] = (css({ bblr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("borderbottomleftradiusinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create bbrr util correctly", () => {
    const css = createCss({ utils: { bbrr } }, null);

    const [atom] = (css({ bbrr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("borderbottomrightradiusinitial");
    expect(atom.value).toBe("1px");
  });
});
