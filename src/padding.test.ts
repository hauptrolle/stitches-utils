import { createCss, IAtom } from "@stitches/core";
import { p, pt, pr, pb, pl, px, py, paddingX, paddingY } from "./padding";

describe("padding utils", () => {
  it("should create m util correctly", () => {
    const css = createCss({ utils: { p } }, null);

    const [prAtom, plAtom, pbAtom, ptAtom] = (css({ p: "1px" }) as any)
      .atoms as IAtom[];

    expect(prAtom.id).toBe("paddingrightinitial");
    expect(prAtom.value).toBe("1px");

    expect(plAtom.id).toBe("paddingleftinitial");
    expect(plAtom.value).toBe("1px");

    expect(pbAtom.id).toBe("paddingbottominitial");
    expect(pbAtom.value).toBe("1px");

    expect(ptAtom.id).toBe("paddingtopinitial");
    expect(ptAtom.value).toBe("1px");
  });

  it("should create mt util correctly", () => {
    const css = createCss({ utils: { pt } }, null);

    const [atom] = (css({ pt: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("paddingtopinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create mr util correctly", () => {
    const css = createCss({ utils: { pr } }, null);

    const [atom] = (css({ pr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("paddingrightinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create mb util correctly", () => {
    const css = createCss({ utils: { pb } }, null);

    const [atom] = (css({ pb: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("paddingbottominitial");
    expect(atom.value).toBe("1px");
  });

  it("should create ml util correctly", () => {
    const css = createCss({ utils: { pl } }, null);

    const [atom] = (css({ pl: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("paddingleftinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create px/paddingY util correctly", () => {
    const css = createCss({ utils: { px, paddingX } }, null);

    const [prAtom, plAtom] = (css({ px: "1px" }) as any).atoms as IAtom[];

    expect(prAtom.id).toBe("paddingrightinitial");
    expect(prAtom.value).toBe("1px");

    expect(plAtom.id).toBe("paddingleftinitial");
    expect(plAtom.value).toBe("1px");

    const [paddingRightAtom, paddingLeftAtom] = (css({
      paddingX: "1px",
    }) as any).atoms as IAtom[];

    expect(paddingRightAtom.id).toBe("paddingrightinitial");
    expect(paddingRightAtom.value).toBe("1px");

    expect(paddingLeftAtom.id).toBe("paddingleftinitial");
    expect(paddingLeftAtom.value).toBe("1px");
  });

  it("should create py/paddingY util correctly", () => {
    const css = createCss({ utils: { py, paddingY } }, null);

    const [pbAtom, ptAtom] = (css({ py: "1px" }) as any).atoms as IAtom[];

    expect(pbAtom.id).toBe("paddingbottominitial");
    expect(pbAtom.value).toBe("1px");

    expect(ptAtom.id).toBe("paddingtopinitial");
    expect(ptAtom.value).toBe("1px");

    const [paddingBottomAtom, paddingTopAtom] = (css({
      paddingY: "1px",
    }) as any).atoms as IAtom[];

    expect(paddingBottomAtom.id).toBe("paddingbottominitial");
    expect(paddingBottomAtom.value).toBe("1px");

    expect(paddingTopAtom.id).toBe("paddingtopinitial");
    expect(paddingTopAtom.value).toBe("1px");
  });
});
