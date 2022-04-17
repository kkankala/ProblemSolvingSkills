const validParenthesis = (s: string): boolean => {
  if (s === null || !s.length) {
    return true;
  }

  let stack = [];
  let chars = s.split('');
  if (chars.length % 2 !== 0) {
    return false;
  }
  for (var c of chars) {
    if (c === '[') {
      stack.push(']');
    } else if (c === '{') {
      stack.push('}');
    } else if (c === '(') {
      stack.push(')');
    } else if (stack.length === 0 || c !== stack.pop()) {
      //you can't close a parenthesis if its in wrong order or if its not open
      return false;
    }
  }
  return stack.length === 0;
};

console.log(validParenthesis('(){}')); //valid

console.log(validParenthesis('(()')); //invalid

console.log(validParenthesis('(((((())))))')); //Valid
console.log(validParenthesis('()()()()')); //valid
console.log(validParenthesis('(((((((()')); //invalid
console.log(validParenthesis('((()(())))')); //valid
