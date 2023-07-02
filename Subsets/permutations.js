// return elements
// const permutations = function(p, up) {
//   if (up.length === 0) {
//     console.log(p);
//     return;
//   };

//   const ch = up.charAt(0);
//   for (let i = 0; i <= p.length; i++) {
//     const f = p.substring(0, i);
//     const s = p.substring(i, p.length);
//     permutations(f + ch + s, up.substring(1));
//   }
// };

// permutations('', 'abc');

// return array
// const permutations = function(p, up) {
//   if (up.length === 0) {
//     const list = [];
//     list.push(p);
//     return list;
//   };

//   const ch = up.charAt(0);
//   const ans = [];
//   for (let i = 0; i <= p.length; i++) {
//     const f = p.substring(0, i);
//     const s = p.substring(i, p.length);
//     ans.push(...permutations(f + ch + s, up.substring(1)));
//   }
//   return ans;
// };

// console.log(permutations('', 'abc')); // [cab, bca, bac, cab, acb, abc]

// count
// const permutations = function(p, up) {
//   if (up.length === 0) {
//     return 1;
//   };

//   let count = 0;
//   const ch = up.charAt(0);
//   for (let i = 0; i <= p.length; i++) {
//     const f = p.substring(0, i);
//     const s = p.substring(i, p.length);
//     count += permutations(f + ch + s, up.substring(1));
//   }
  
//   return count;
// };

// console.log(permutations('', 'abc')); // 6 

const permutations = function(p, up,count) {
    if (up.length === 0) {
      return count + 1;
    };
  
    const ch = up.charAt(0);
    for (let i = 0; i <= p.length; i++) {
      const f = p.substring(0, i);
      const s = p.substring(i, p.length);
      count = permutations(f + ch + s, up.substring(1), count);
    };
    return count;
  };
  
  console.log(permutations('', 'abc', 0)); // 6 