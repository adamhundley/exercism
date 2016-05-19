function CustomSet(set){
 this.set = set;
}

CustomSet.prototype.sorted = function(){
  return this.set.sort();
};

CustomSet.prototype.eql = function(newSet){
  if(this.sorted === newSet.sorted){
    return true;
  } else {
    return false;
  }
};

CustomSet.prototype.difference = function(newSet){
  diffs = [];
  this.set.forEach(function(num){
    difference = newSet.set.indexOf(num);
    if(difference === -1){
      diffs.push(num);
    }
  });
  return this;
};

CustomSet.prototype.delete = function(num){
  toBeDeleted =  this.set.indexOf(num);
  if(toBeDeleted != -1){
    this.set.splice(toBeDeleted, 1);
  }
  return this;
};

CustomSet.prototype.disjoint = function(newSet){
  diffs = [];

  function isNegOne(element, index, array) {
    return element === -1;
  }

  if(diffs.length !== 0){
    this.set.forEach(function(num){
      difference = newSet.set.indexOf(num);
      diffs.push(difference);
    });
    return diffs.every(isNegOne);
  } else {
    return true;
  }
};

module.exports = CustomSet;
