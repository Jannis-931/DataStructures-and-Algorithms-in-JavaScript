// const subSequence = function (p, up) {
//   if (up.length === 0) {
//     console.log(p);
//     return;
//   }

//   const ch = up.charAt(0);
//   subSequence(p + ch, up.substring(1));
//   subSequence(p, up.substring(1));
// };

// subSequence('', 'abc');

const subSequenceReturnArray = function (p, up) {
  if (up.length === 0) {
    const result = [];
    result.push(p);
    return result;
  }

  const ch = up.charAt(0);
  const left = subSequenceReturnArray(p + ch, up.substring(1));
  const right = subSequenceReturnArray(p, up.substring(1));

  return left.concat(right);
};

console.log(subSequenceReturnArray('', 'abc'));

