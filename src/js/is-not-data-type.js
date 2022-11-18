export default function isNotDataType(input, dataTypeParam) {
  if (dataTypeParam === "string" && (input.toString().trim() === "" || Number.isInteger(parseInt(input)))) {
    return true;
  } else if (dataTypeParam === "numberString" && (Number.isNaN(parseInt(input)) || /\d+\s+\w+/.test(input))) {
    return true;
  } else {
    return false;
  }
}