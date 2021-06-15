import { createField } from "./createField";

describe("createField", () => {
  it("should return createField without template", () => {
    expect(createField(3, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  it("should return createField with template", () => {
    expect(createField(2, 2)).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });
});
