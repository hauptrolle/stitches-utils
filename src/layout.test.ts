import { createCss, IAtom } from "@stitches/core";
import { w, minW, maxW, h, minH, maxH, boxSize } from "./layout";

describe("layout utils", () => {
  it("should create w util correctly", () => {
    const css = createCss({ utils: { w } }, null);

    const [atom] = (css({ w: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("widthinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create minW util correctly", () => {
    const css = createCss({ utils: { minW } }, null);

    const [atom] = (css({ minW: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("minwidthinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create maxW util correctly", () => {
    const css = createCss({ utils: { maxW } }, null);

    const [atom] = (css({ maxW: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("maxwidthinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create h util correctly", () => {
    const css = createCss({ utils: { h } }, null);

    const [atom] = (css({ h: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("heightinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create minH util correctly", () => {
    const css = createCss({ utils: { minH } }, null);

    const [atom] = (css({ minH: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("minheightinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create maxH util correctly", () => {
    const css = createCss({ utils: { maxH } }, null);

    const [atom] = (css({ maxH: "1px" }) as any).atoms as IAtom[];

    expect(atom.id).toBe("maxheightinitial");
    expect(atom.value).toBe("1px");
  });

  it("should create boxsize util correctly", () => {
    const css = createCss({ utils: { boxSize } }, null);

    const [heightAtom, widthAtom] = (css({ boxSize: "1px" }) as any)
      .atoms as IAtom[];

    expect(heightAtom.id).toBe("heightinitial");
    expect(heightAtom.value).toBe("1px");

    expect(widthAtom.id).toBe("widthinitial");
    expect(widthAtom.value).toBe("1px");
  });
});
