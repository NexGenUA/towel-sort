module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let flag = true;
  return matrix.reduce((acc, cur) => {
    if (cur instanceof Array) {
      if (flag) {
        flag = false;
        cur.sort((a, b) => a - b);
      } else {
        flag = true;
        cur.sort((a, b) => b - a);
      }          
    }
    return acc.concat(cur)
  }, [])
}
