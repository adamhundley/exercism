
function Gigasecond(requestedDate){
 this.requestedDate = requestedDate;
}

Gigasecond.prototype.date = function() {
  var requestedDateSeconds = this.requestedDate.getTime()
  var powerSeconds = Math.pow(10, 9) * 1000
  var newDate = requestedDateSeconds + powerSeconds
  return new Date(newDate);
};

module.exports = Gigasecond;
