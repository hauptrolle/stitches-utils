import { createCss, IAtom } from "@stitches/core";
import { m, mt, mr, mb, ml, mx, my, marginX, marginY } from "./margin";

describe("margin utils", () => {
  it("should create m util correctly", () => {
    const css = createCss({ utils: { m } }, null);

    const [mrAtom, mlAtom, mbAtom, mtAtom] = (css({ m: "1px" }) as any)
      .atoms as IAtom[];

    expect(mrAtom.id).toBe("marginrightinitial");
    expect(mrAtom.value).toBe("1px");

    expect(mlAtom.id).toBe("marginleftinitial");
    expect(mlAtom.value).toBe("1px");

    expect(mbAtom.id).toBe("marginbottominitial");
    expect(mbAtom.value).toBe("1px");

    expect(mtAtom.id).toBe("margintopinitial");
    expect(mtAtom.value).toBe("1px");
  });

  it("should create mt util correctly", () => {
    const css = createCss({ utils: { mt } }, null);

    const [atom] = (css({ mt: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("margintopinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create mr util correctly", () => {
    const css = createCss({ utils: { mr } }, null);

    const [atom] = (css({ mr: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("marginrightinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create mb util correctly", () => {
    const css = createCss({ utils: { mb } }, null);

    const [atom] = (css({ mb: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("marginbottominitial");
    expect(atom.value).toBe("1px");
  });

  it("should create ml util correctly", () => {
    const css = createCss({ utils: { ml } }, null);

    const [atom] = (css({ ml: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("marginleftinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create mx/marginY util correctly", () => {
    const css = createCss({ utils: { mx, marginX } }, null);

    const [mrAtom, mlAtom] = (css({ mx: "1px" }) as any).atoms as IAtom[];

    expect(mrAtom.id).toBe("marginrightinitial");
    expect(mrAtom.value).toBe("1px");

    expect(mlAtom.id).toBe("marginleftinitial");
    expect(mlAtom.value).toBe("1px");

    const [marginRightAtom, marginLeftAtom] = (css({ marginX: "1px" }) as any)
      .atoms as IAtom[];

    expect(marginRightAtom.id).toBe("marginrightinitial");
    expect(marginRightAtom.value).toBe("1px");

    expect(marginLeftAtom.id).toBe("marginleftinitial");
    expect(marginLeftAtom.value).toBe("1px");
  });

  it("should create my/marginY util correctly", () => {
    const css = createCss({ utils: { my, marginY } }, null);

    const [mbAtom, mtAtom] = (css({ my: "1px" }) as any).atoms as IAtom[];

    expect(mbAtom.id).toBe("marginbottominitial");
    expect(mbAtom.value).toBe("1px");

    expect(mtAtom.id).toBe("margintopinitial");
    expect(mtAtom.value).toBe("1px");

    const [marginBottomAtom, marginTopAtom] = (css({ marginY: "1px" }) as any)
      .atoms as IAtom[];

    expect(marginBottomAtom.id).toBe("marginbottominitial");
    expect(marginBottomAtom.value).toBe("1px");

    expect(marginTopAtom.id).toBe("margintopinitial");
    expect(marginTopAtom.value).toBe("1px");
  });
});
