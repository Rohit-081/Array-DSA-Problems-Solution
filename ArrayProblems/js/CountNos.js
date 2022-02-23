const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]; // Given Array.

const countNo = (arr) => {
  const ObjCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (ObjCount[arr[i]]) {
      ObjCount[arr[i]] += 1;
    } else {
      ObjCount[arr[i]] = 1;
    }
  }
  console.log(ObjCount);
};

countNo(arr);

const removeDuplicate = (arr) => {
  const ObjCount = [];
  for (let i = 0; i < arr.length; i++) {
    if (ObjCount.includes(arr[i])) {
    } else {
      ObjCount.push(arr[i]);
    }
  }
  console.log(ObjCount);
};

removeDuplicate(arr);
