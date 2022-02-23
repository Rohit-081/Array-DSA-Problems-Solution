const arr2 = [1, 2, 3, 4, 5, 9];
const element2 = 90;
const index = 2;

function insertAtIndex(arr, index, element) {
  arr.splice(index, 0, element);
  console.log(arr);
}

insertAtIndex(arr2, index, element2);
