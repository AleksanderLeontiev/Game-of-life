import { isAlive } from "./isAlive";

describe("isAnyoneAlive", () => {
  [
    { field: [], expectedResult: false },
    { field: [[]], expectedResult: false },
    { field: [[1]], expectedResult: true },
    { field: [[1], [0]], expectedResult: true },
    { field: [[0], [0]], expectedResult: false },
    {
      field: [
        [0, 0, 0],
        [0, 0, 1],
      ],
      expectedResult: true,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for ${JSON.stringify(
      el.field
    )}`, () => {
      expect(isAlive(el.field)).toBe(el.expectedResult);
    });
  });
});
