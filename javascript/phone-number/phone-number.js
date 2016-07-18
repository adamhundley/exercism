function PhoneNumber(x) {
  this.numz = x.replace(/\D/g,'');

  var badNum = '0000000000';

  this.number = function(){
    if(this.numz.length < 10){
      return badNum
    }else if (this.numz.length > 11) {
      return badNum
    }else if (this.numz.length === 11 && this.numz[0] !== '1' ) {
      return badNum
    }else if (this.numz.length === 11 && this.numz[0] === '1') {
      return this.numz.slice(1)
    } {
      return this.numz
    }
  }

  this.areaCode = function(){
    return this.number().substr(0,3)
  }

  this.toString = function() {
    var number = this.number()
    return '('+ number.substr(0,3) +') '+ number.substr(3,3) +'-' + number.substr(6,4)
  }
}

module.exports = PhoneNumber;
