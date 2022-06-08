const isPalindrome = (s) => {
      let arr = []
      for (let i = s.length - 1; i >= 0; i--) {
            arr.push(s[i])
      }
      return s === arr.join('')
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('huigjfffooofff8'))
console.log(isPalindrome('pooooooop'))