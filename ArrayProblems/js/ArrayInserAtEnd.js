const sizeOfArray = 7;
const arr1 = [1, 2, 3, 4, 5, 9];
const elemnt = 90;

function insertAtEnd(arr, sizeOfArray, element) {
  arr.push(element);
  console.log(arr);
}

insertAtEnd(arr1, sizeOfArray, elemnt);
