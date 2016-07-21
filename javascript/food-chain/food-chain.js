var FoodChain = function() {
  var animals = [
    {},
    { name: 'fly'},
    { name: 'spider', statement: 'It wriggled and jiggled and tickled inside her.\n'},
    { name: 'bird', statement: 'How absurd to swallow a bird!\n'},
    { name: 'cat'},
    { name: 'dog'},
    { name: 'goat'},
    { name: 'cow'},
    { name: 'horse'},
  ];

  var firstLine = 'I know an old lady who swallowed a '

  var lastLine = "I don't know why she swallowed the fly. Perhaps she'll die.\n"


  this.verse = function(start, end) {

    var song = firstLine + animals[start].name + '.\n'

    if(start >= 2) {
      if(!end) {end = start}

      song += animals[start].statement

      if(start >=2 ){
        for (var i = start; i <= end; i++) {
          song += 'She swallowed the '+ animals[i].name +' to catch the '+ animals[i-1].name + '.\n'
        }
        
      }
    }

    song += lastLine
    return song
  }
}

module.exports = FoodChain;

//
// I know an old lady who swallowed a cow.
// I don't know how she swallowed a cow!
// She swallowed the cow to catch the goat.
// She swallowed the goat to catch the dog.
// She swallowed the dog to catch the cat.
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
//
// I know an old lady who swallowed a horse.
// She's dead, of course!
