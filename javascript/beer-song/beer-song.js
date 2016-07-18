function BeerSong() {
  this.verse = function(x){
    if(x === 1){
      return x +' bottle of beer on the wall, '+ x +' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
    }else if (x === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
    }else if (x === 2) {
      return x + ' bottles of beer on the wall, ' + x + ' bottles of beer.\nTake one down and pass it around, ' + (x - 1) + ' bottle of beer on the wall.\n'
    }else {
      return x + ' bottles of beer on the wall, ' + x + ' bottles of beer.\nTake one down and pass it around, ' + (x - 1) + ' bottles of beer on the wall.\n'
    }
  }

  this.sing = function(start, end){
    song = "";
    if(end === undefined){
      end = 0;
    }
    for (var i = start; i >= end; i--) {
      song += this.verse(i) + '\n';
    }
    return song.trim() + '\n';
  }
}

module.exports = BeerSong;
