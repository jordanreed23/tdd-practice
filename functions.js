//onlyOdd is a function that should take a string and return a string that contains only the characters at the odd indices. It should return an empty string on all invalid inputs or single character/empty strings.
let onlyOdd = (str) => {
  if(!str || typeof str !== 'string' || str.length <= 1){
    return '';
  }
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (i%2 !== 0) {
      newStr += str[i];
    }
  }
  return newStr;
};

module.exports={
  onlyOdd,
};
