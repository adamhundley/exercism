Hamming = function(dnaFirst, dnaSecond) {
  this.compute = function(dnaFirst, dnaSecond){
    if(dnaFirst.length != dnaSecond.length){
      throw new Error("DNA strands must be of equal length.");
    }

    var counter = 0;

    for (var n = 0; n < dnaFirst.length; n += 1){
      if (dnaFirst[n] != dnaSecond[n]){
        counter += 1;
      }
    }
    return counter;
  };
};


module.exports = Hamming;
