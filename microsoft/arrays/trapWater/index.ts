/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * @param height
 */
const trap = (height: number[]): number => {
  let water = 0;
  let i = 0;
  const st = [];

  while (i < height.length) {
    while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
      //   const top = st[st.length - 1];
      //   st.pop();
      const top = st.pop();
      if (st.length === 0) break;

      const dist = i - st[st.length - 1] - 1;
      const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
      //   water += dist * h;
      water = water + dist * h;
    }
    st.push(i);
    i++;
  }
  return water;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
debugger;
