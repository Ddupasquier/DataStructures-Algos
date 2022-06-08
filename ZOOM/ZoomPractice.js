function signFunc(x) {
  let product = 1;
  for (let i of x) {
    product = product * i;
  }
  if (product < 0) {
    return "-1";
  }
  if (product > 0) {
    return "1";
  }
  if (product === 0) {
    return "0";
  }
}

console.log(signFunc([-1,-2,-3,-4,3,2,1])) /*1*/
console.log(signFunc([9,72,34,29,-49,-22,-77,-17,-66,-75,-44,-30,-24])) /*-1*/
console.log(signFunc([41,65,14,80,20,10,55,58,24,56,28,86,96,10,3,84,4,41,13,32,42,43,83,78,82,70,15,-41]))
console.log(signFunc([41,65,14,80,-20,10,55,58,24,56,28,86,96,10,3,84,4,41,13,32,42,43,83,78,82,70,15,-41]))
console.log(signFunc([41,65,14,80,-20,10,55,58,24,56,28,86,96,10,3,84,4,41,13,32,42,43,83,78,0,70,15,-41])) /*0*/

/*  -------------------------------------------------------  */

// function diff(s, t) {
//   let a = {};
//   let b = {};

//   for (i = 0; i < s.length; i++) {
//     let n = s[i];
//     a[n] ? (a[n] += 1) : (a[n] = 1);
//   }

//   for (i = 0; i < t.length; i++) {
//     let n = t[i];
//     b[n] ? (b[n] += 1) : (b[n] = 1);
//   }

//   if (s.length === t.length) {
//     return "these are the same length";
//   }

//   for (let k in b) {
//     if (b[k] !== a[k]) {
//       return k;
//     }
//   }
// }

// console.log(diff("abcd", "abcde"));
// console.log(diff("", "y"));
// console.log(diff("schfiftyfive", "vcetsiyhffffi"));
// console.log(
//   diff("whoisyourdaddyandwhatdoeshedo", "hooahyodnduaaeodwdcdrwedshysti")
// );
// console.log(diff("thetruthisoutthere", "tutereosrhlehttihtu"));
// console.log(diff("butterscotcg", "butterscotch"));


/* ---------------------------------------------------------------------- */


// class Twitter {
//     constructor(id, username, tweets, followers) {
//       this.id = id;
//       this.username = username;
//       this.tweets = tweets;
//       this.followers = followers;
//     }

//     postTweet(tweet) {
//         return `${tweet} - ${id += "1"}`
//     }



//     getNewsFeed() {

//     }

//     follow() {

//     }

//     unfollow() {

//     }

// }