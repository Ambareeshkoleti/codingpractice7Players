let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
let newArray = []
for (let i of array) {
  if (array.includes(i)) {
    continue
  } else {
    newArray.push(i)
  }
}

console.log(newArray)
