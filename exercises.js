function generateMatchedParens(n, left = 0, right = 0, strings = ['']) {
  if (left + right === 2 * n) return strings;

  const leftStrings = strings.map(string => string + '(');
  if (left > right) {
    const rightStrings = strings.map(string => string + ')');

    if (left < n) {
      return generateMatchedParens(n, left + 1, right, leftStrings)
        .concat(generateMatchedParens(n, left, right + 1, rightStrings));
    } else {
      return generateMatchedParens(n, left, right + 1, rightStrings);
    }
  } else {
    return generateMatchedParens(n, left + 1, right, leftStrings);
  }
}
