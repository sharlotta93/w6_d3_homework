const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  function regularize (string){ return string.toLowerCase().split('').sort().join('')};
  let anagramArray = []
  let mainWord = regularize(this.word)

  for (var word of otherWords) {
    if (this.word === word) break;
    var newWord = regularize(word);
    if (newWord === mainWord) {
      anagramArray.push(word);
    }
  }
  return anagramArray;
}

module.exports = AnagramFinder;

// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//   let anagramArray = otherWords.filter( (word) => {
//     (this.word.split('').sort().join('') === word.split('').sort().join(''))
//   });
//   return anagramArray;
// }
