
var Words = function(){
  this.count = function(sentance){
    var tally = {}
    var words = sentance.trim().split(/[\n\r\s]+/)

    words.forEach(function(word){
      var word = word.toLowerCase();

      if (isNaN(tally[word])) {
        tally[word] = 0
      }
      tally[word]++
    });
    return tally

  }
}

module.exports = Words;
