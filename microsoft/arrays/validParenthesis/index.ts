/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * @param s that contains brackets only.
 * @returns
 */
const validParenthesis = (s: string): boolean => {
  if (s === null || !s.length) {
    return true;
  }

  let stack = [];
  let chars = s.split('');
  if (chars.length % 2 !== 0) {
    return false;
  }
  //if bracket is opening then it has to close, so its related closing will be stored on stack.
  //stack maintains brackets that are not closed in order yet.
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
