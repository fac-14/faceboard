const table = {
  0:[1,3],
  1:[0,2,4],
  2:[1,5],
  3:[0,4,6],
  4:[1,3,5,7],
  5:[2,4,8],
  6:[3,7],
  7:[4,6,8],
  8:[7,5]
}

const lookupMoves = (num) => {
  return table[num];
}

export default lookupMoves;