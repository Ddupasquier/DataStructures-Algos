// * THIS SOLUTION WORKS ON SMALL CODE BASES BUT IS NOT EFFICIENT ENOUGH TO HANDLE 
// * A VERY VERY LONG STRING

// const longestPalindrome = (str) => {
//   let result = str[0];

//   if (isPalindrome(str)) return str;
//   if (str.length < 3) return str[0];

//   for (let i = 0; i < str.length; i++) {
//     let store = ''
//     for (let j = i + 1; j < str.length; j++) {
//       store += str[j];
//       if (isPalindrome(store) && store.length > result.length) result = store;
//     }
//   }
//   if (result === '') return str[0]
//   return result
// };

// const isPalindrome = (s) => {
//   let arr = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     arr.push(s[i]);
//   }
//   return s === arr.join('');
// };


// * THIS IS A MORE EFFICIENT SOLUTION WHICH I GOT FROM THE DISCUSSION BOARD OF LEETCODE
var longestPalindrome = function(s) {
      if (s.length == 1) return s;
      let res = s[0], left, right;
      for(let i = 0; i < s.length; i++){
        left = i - 1, right = i + 1;
        while(left >= 0 && right < s.length){
          if(s[left] != s[right]) break;
          if(right + 1 - left > res.length)
            res = s.slice(left, right + 1);
          left--;
          right++;
        }
        left = i, right = i + 1;
        while(left >= 0 && right < s.length){
          if(s[left] != s[right]) break;
          if(right + 1 - left > res.length)
            res = s.slice(left, right + 1);
          left--;
          right++;
        }
      }
      return res;
    };

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('cbc'));
console.log(longestPalindrome('abcda'));
