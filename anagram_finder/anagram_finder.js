const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  function regularize (string){ return string.toLowerCase().split('').sort().join('')};
  let anagramArray = []

  for (var word of otherWords) {
    if (this.word === word) break;
    if (regularize(word) === regularize(this.word)) {
      anagramArray.push(word);
    }
  }
  return anagramArray;
}

// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//   function regularize (string){ return string.toLowerCase().split('').sort().join('')};
//
//   let anagramArray = otherWords.filter( (word) => {
//     (regularize(this.word) === regularize(word))
//   });
//   return anagramArray;
// }

module.exports = AnagramFinder;
