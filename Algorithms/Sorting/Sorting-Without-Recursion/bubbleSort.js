// Bad code for sorted array. It's compare (n^2)
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j] < arr[j - 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = tmp;
//       }
//     }
//   }
//   return arr;
// };


// sorted array takes O(n) complexity
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // for each step, max item will come at the last respective index
    for (let j = 1; j < arr.length - i; j++) {  // or j <= (arr.lenght - i - 1)
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
        swapped = true;
      }
    }

    // If no swaps are made in this iteration, the array is already sorted
    if (!swapped) {
      break; // or return arr;
    }
  }
  return arr;
};

const arr = [1, 2, 10, 4, 5];
console.log(bubbleSort(arr));
