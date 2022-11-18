import isNotDataType from "../src/js/is-not-data-type.js";

describe("check if argument is not data type", () => {

  test("1. It should return true if value 'Hello' is not number", () => {
    expect(isNotDataType("Hello", "numberString")).toEqual(true);
  });

  test("2. It should return true if value blank is not string", () => {
    expect(isNotDataType("", "string")).toEqual(true);
  });

  test("3. It should return false if value 'AUD' is a string", () => {
    expect(isNotDataType("AUD", "string")).toEqual(false);
  });

  test(". It should return false if value '1' is a numberString", () => {
    expect(isNotDataType("1", "numberString")).toEqual(false);
  });
});