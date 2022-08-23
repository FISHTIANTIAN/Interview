var array = [1, 2, 1, 1, '1'];

function unique(array) {
  return array.concat().sort().filter(function (item, index, array) {
    return !index || item !== array[index - 1]
  })
}

console.log(unique(array));