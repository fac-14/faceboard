const scrambleBoard = (arr) => {
  let count = arr.length - 1;
  while (count > 0) {
    let random = Math.floor(Math.random() * count)
    let selected = arr[random]
    arr[random] = arr[count]
    arr[count] = selected
    count -= 1;
  }
  return arr;
}

export default scrambleBoard;