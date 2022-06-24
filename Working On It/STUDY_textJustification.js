//     count characters left to right up to or nearest to
//     without exceeding maxWidth(16)
// *   Add spaces between words as evenly as possible, without exceeding maxWidth

var fullJustify = function (words, maxWidth) {
  var len = words.length;
  var arr = [];
  var width = 0;
  var item = null;
  var addLen = 0;
  var res = [];

  for (var i = 0; i < len; i++) {
    item = words[i];
    addLen = width === 0 ? item.length : item.length + 1;

    if (width + addLen > maxWidth) {
      res.push(helper(arr, maxWidth - width, false));
      arr = [];
      width = 0;
      addLen = item.length;
    }

    arr.push(item);
    width += addLen;
  }

  res.push(helper(arr, maxWidth - width, true));

  return res;
};

var helper = function (arr, left, isLast) {
  var len = arr.length;
  var num = 0;
  var rem = 0;
  var res = '';

  if (len === 1 || isLast) {
    return arr.join(' ') + ' '.repeat(left);
  }

  num = Math.floor(left / (len - 1));
  rem = left % (len - 1);
  for (var i = 0; i < len; i++) {
    res += arr[i];
    if (i < len - 1) res += ' '.repeat(num + 1);
    if (i < rem) res += ' ';
  }

  return res;
};

console.log(
  fullJustify(
    ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    16
  )
);
