function Anagram(word) {
  this.matches = function(options){
    if (typeof options === 'string') {
      options = Array.prototype.slice.call(arguments);
    }
    var sortedWord = word.toLowerCase().split('').sort()
    var sortedOptions = this.sortOptions(options)
    this.removeSelf(options);
    return this.findMatches(sortedWord, sortedOptions, options)
  }

  this.removeSelf = function(options) {
    for (var i = 0; i < options.length; i++) {
      if (word.toLowerCase() === options[i].toLowerCase()) {
        options.splice(i, 1)
      }
    }
  }

  this.findMatches = function(sortedWord, sortedOptions, options) {
    var matches = []
    for (var i = 0; i < options.length; i++) {
      if(this.compare(sortedWord, sortedOptions[i])){
        matches.push(options[i])
      }
    }
    return matches
  }

  this.compare = function(sortedWord, sortedOption) {
    if(sortedWord.length != sortedOption.length) {
      return false;
    }

    for (var i = 0; i < sortedWord.length; i++) {
      if(sortedWord[i] != sortedOption[i]) {
        return false;
      }
    }
    return true;
  }

  this.sortOptions = function(options){
    var sortedOptions = []
    for (var i = 0; i < options.length; i++) {
      sortedOptions.push(options[i].toLowerCase().split("").sort());
    }
    return sortedOptions
  }
}

module.exports = Anagram;
