const stringFunction = {
  stringLength: (str) => {
    const count = str.split('').length;
    if (count < 1 || count > 10) {
      throw new Error(' You must provide a   number');
    }
    return count;
  },

};
module.exports = stringFunction;
