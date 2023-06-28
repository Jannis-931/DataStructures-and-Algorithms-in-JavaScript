// 2 args
// const removeElements = function (p, up) {
//   if (up.length === 0) {
//     console.log(p);
//     return;
//   }

//   const ch = up.charAt(0);

//   if (ch === 'a') {
//     removeElements(p, up.substring(1));
//   } else {
//     removeElements(p + ch, up.substring(1))
//   }
// };

// removeElements('', 'baccad'); // bccd

// 3 args
// const removeElements = function (str, result, index) {
//   if (index === str.length) {
//     return result;
//   }

//   const ch = str.charAt(index);

//   if (ch === 'a') {
//     return removeElements(str, result, index + 1);
//   } else {
//     return removeElements(str, result + ch, index + 1)
//   }
// };

// console.log(removeElements('baccdah', '', 0)); // bccd

// 1 arg
// const removeElements = function(str) {
//   if (str.length === 0) {
//     return '';
//   }

//   const ch = str.charAt(0);

//   if (ch === 'a') {
//     return removeElements(str.substring(1));
//   } else {
//     return ch + removeElements(str.substring(1));
//   }
// };

// console.log(removeElements('baccdahx')); // bccd


// skip apple
// const skipApple = function(str) {
//   if (str.length === 0) {
//     return '';
//   }

//   if (str.startsWith('apple')) {
//     return skipApple(str.substring(5));
//   } else {
//     return str.charAt(0) + skipApple(str.substring(1));
//   }
// }

// console.log(skipApple('bcdapplefg'));


const skipAppNotApple = function(str) {
  if (str.length === 0) {
    return '';
  }

  if (str.startsWith('app') && !str.startsWith('apple')) {
    return skipAppNotApple(str.substring(3));
  } else {
    return str.charAt(0) + skipAppNotApple(str.substring(1));
  }
}

console.log(skipAppNotApple('bcdapplefg'));

