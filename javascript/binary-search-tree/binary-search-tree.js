function Bst(num){
  this.data = num;
  this.left = null;
  this.right = null;
};

Bst.prototype.insert = function (num) {
  if(num <= this.data) {
    if
    this.left = new Bst(num)
  } else if (num > this.data) {
    this.right = new Bst(num)
  }
};



module.exports = Bst
