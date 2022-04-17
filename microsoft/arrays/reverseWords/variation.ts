const reverseWordsVariation = (s: string[]) => {
  //   console.log(s);
  //reverse whole char array
  reverse(s, 0, s.length - 1);

  //   console.log(s);
  //reverse each word in the char array
  reverseEachWord(s);
};

const reverseEachWord = (s: string[]) => {
  let n = s.length;
  let start = 0;
  let end = 0;
  while (start < n) {
    //go to the end of the word
    // console.log(`end is ${end}, and s[end] is ${s[end]}`);
    while (end < n && s[end] !== ' ') ++end;
    //reverse the word
    reverse(s, start, end - 1);
    // move to the next word
    start = end + 1;
    ++end;
  }
};

const reverse = (s: string[], left: number, right: number) => {
  while (left < right) {
    let temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }
};
let multipleSentences = [
  'the sky'.split(''),
  'the sky is blue'.split(''),
  'cookies we have'.split(''),
];
multipleSentences.forEach((x) => {
  reverseWordsVariation(x);
  console.log(x.join(''));
});
