function removeVowels(s: string): string {
  let response = [];
  for (let c of s) {
    if (!['a', 'e', 'i', 'o', 'u'].includes(c)) {
      response.push(c);
    }
  }
  return response.join('');
  //array join will give you approx 89ms, string + will give you approx 100ms, regex will give you 66ms runtime. memory little less in regex.
  //return s.replace(/[aeiou]/g,'');
}

console.log(removeVowels('leetcodeisacommunityforcoders'));
