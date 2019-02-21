const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  let arrayWord= this.word.split('');
  let counts = {};

  for (let i = 0; i < arrayWord.length; i++) {
    let letter = arrayWord[i];
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
    if (counts[letter] > 1) {
      return false;
    }
  }
  return true;
}


module.exports = IsogramFinder;
