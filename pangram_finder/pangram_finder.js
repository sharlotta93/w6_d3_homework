const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () { //regular expressions
  let phrase = this.phrase.toLowerCase().replace(/[^a-z]/g,'') //at the start replace any symbol with space
      for (var i = 0; i < this.alphabet.length; i++) {
          return (phrase.indexOf(this.alphabet[i]) < 0) ? false : true; //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    }
}


// I can also remove all duplicate letter and check whether it's still 26

module.exports = PangramFinder;
