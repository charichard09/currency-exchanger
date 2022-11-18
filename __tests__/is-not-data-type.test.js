import isNotDataType from "../src/js/is-not-data-type.js";

describe("check if argument is not data type", () => {

  test("1. It should return true if value 'Hello' is not number", () => {
    expect(isNotDataType("Hello", "numberString")).toEqual(true);
  });

  test("2. It should return true if value 1 is not string", () => {
    expect(isNotDataType(1, "string")).toEqual(true);
  });

  test("3. It should return false if value 'AUD' is a string", () => {
    expect(isNotDataType("1", "numberString")).toEqual(false);
  });
});