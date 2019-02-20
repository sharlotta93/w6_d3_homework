const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () { //regular expressions
  let phrase = this.phrase.toLowerCase().replace(/[^a-z]/g,'') //at the start replace anything with a combination with zero to many is a-z
      for (var i = 0; i < this.alphabet.length; i++) {
          return (phrase.indexOf(this.alphabet[i]) < 0) ? false : true;
    }
}

module.exports = PangramFinder;
