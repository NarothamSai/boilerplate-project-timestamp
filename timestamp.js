function Timestamp(date){
  this.date = date;
}

Timestamp.prototype.getCurrent = function(){
  let timestamp = {};
  
  let date = new Date();
  timestamp.unix = date.valueOf();
  timestamp.utc = date.toUTCString();

  return timestamp;
}

module.exports = Timestamp;