// const subSeqAscii = function(p, up) {
//     if (up.length === 0) {
//       console.log(p);
//       return;
//     }
  
//     const ch = up.charAt(0);
//     subSeqAscii(p + ch, up.substring(1));
//     subSeqAscii(p, up.substring(1));
//     subSeqAscii(p + ch.charCodeAt(0), up.substring(1));
//   };
  
// subSeqAscii('', 'abc');

const subSeqAsciiRet = function(p, up) {
    if (up.length === 0) {
      const result = [];
      result.push(p)
      return result;
    }
  
    const ch = up.charAt(0);
    const first = subSeqAsciiRet(p + ch, up.substring(1));
    const second = subSeqAsciiRet(p, up.substring(1));
    const third = subSeqAsciiRet(p + ch.charCodeAt(0), up.substring(1));

    return first.concat(second, third);
  };
  
console.log(subSeqAsciiRet('', 'abc'));