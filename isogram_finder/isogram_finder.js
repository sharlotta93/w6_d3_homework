const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  let array_word= this.word.split('');
  let counts = {};

  for (let i = 0; i < array_word.length; i++) {
    let letter = array_word[i];
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
    if (counts[letter] > 1) {
      return false;
    }
  }
  return true;
}


module.exports = IsogramFinder;
