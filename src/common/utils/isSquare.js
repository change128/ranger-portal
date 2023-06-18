// isSquare
// 输入四个点的坐标{x,y} ，判断是否为正方形,并写出每一步的中文注释
const isSquare = (p1, p2, p3, p4) => {
  // 计算两点之间的距离
  const distance = (p1, p2) => {
    // Math.sqrt() 函数返回一个数的平方根
    // Math.pow() 函数返回基数（base）的指数（exponent）次幂
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };
  // 计算四个点两两之间的距离
  const d2 = distance(p1, p2);
  const d3 = distance(p2, p3);
  const d4 = distance(p3, p4);
  const d5 = distance(p1, p4);

  console.log(d2, d3, d4, d5);

  // 判断是否为正方形夹角90度
  if (d2 === d3 && d3 === d4 && d4 === d5 && d2 !== 0) {
    return true;
  }
  return false;
};

console.log(
  isSquare({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 0 }),
);
