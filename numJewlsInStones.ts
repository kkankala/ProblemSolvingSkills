/**
 * 76ms runtime, memory usage: 44.6MB
 * @param jewels
 * @param stones
 * @returns
 */
function numJewelsInStones(jewels: string, stones: string): number {
  let mySet = new Set();
  for (let char of jewels) {
    mySet.add(char);
  }
  let numberOfJewels = 0;
  for (let char of stones) {
    if (mySet.has(char)) {
      numberOfJewels++;
    }
  }
  return numberOfJewels;
}

/**
 * 66ms runtime, memory usage: 43.4MB
 * @param jewels
 * @param stones
 * @returns
 */
function numJewelsInStonesBetter(jewels: string, stones: string): number {
  let numOfJewels: number = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      numOfJewels++;
    }
  }

  return numOfJewels;
}
console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));

console.log(numJewelsInStonesBetter('aA', 'aAAbbbb'));
console.log(numJewelsInStonesBetter('z', 'ZZ'));
