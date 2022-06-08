const reverseString = (str) => {
  const stringArray = str.split('');
  const reversed = [];
  for (let i = stringArray.length - 1; i >= 0; i -= 1) {
    reversed.push(stringArray[i]);
  }

  return reversed.join('');
};

module.exports = reverseString;