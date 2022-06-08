const words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax'];
const string1 = 'tcabnihjs';
const string2 = 'tbcanihjs';
const string3 = 'baykkjl';
const string4 = 'bbabylkkj';
const string5 = 'ccc';
const string6 = 'breadmaking';

function find(arrWords, letters) {
  let matched = '';
  for (let i = 0; i < arrWords.length; i++) {
    if (matched !== '') {
      break;
    }
    const word = arrWords[i];

    for (let j = 0; j < word.length; j++) {
      if (!letters.includes(word[j])) {
        break;
      } else if (j === word.length - 1) {
        matched = word;
      }
    }
  }
  return matched;
}

console.log(find(words, string1));
