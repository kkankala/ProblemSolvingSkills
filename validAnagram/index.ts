function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length) return false;
  const counts = {} as any;
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'rat'));
