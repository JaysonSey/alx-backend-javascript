export function cleanSet(Set, startString) {
  let result = '';
  for (const value of Set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
