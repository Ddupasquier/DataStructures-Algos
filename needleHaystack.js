var strStr = function(haystack, needle) {
      if (!needle) {
            return 0
      }
      if (haystack.includes(needle)) {
            return haystack.indexOf(needle)
      } else return -1

  };

  console.log(strStr('hello', 'll'))
  console.log(strStr('woah', 'ah'))
  console.log(strStr('floof', 'forp'))
  console.log(strStr('yourmama', 'ma'))
  console.log(strStr('yourmama', ''))