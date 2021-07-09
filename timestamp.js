function Timestamp(){
}

Timestamp.prototype.getCurrent = function(){
  let timestamp = {};
  
  let date = new Date();
  timestamp.unix = date.valueOf();
  timestamp.utc = date.toUTCString();

  return timestamp;
}

Timestamp.prototype.getFromDate = function(date){
  let timestamp = {};

  if(this.isNotANumber(date) == false){
    date = parseInt(date);
  }

  date = new Date(date);

  if(this.isInvalidDate(date) == true){
    timestamp.error = "Invalid Date"
  }else{
    timestamp.unix = date.valueOf();
    timestamp.utc = date.toUTCString();
  }

  return timestamp;
}

Timestamp.prototype.isNotANumber = function(date){
  return isNaN(date);
}

Timestamp.prototype.isInvalidDate = function(date){
  return date == "Invalid Date";
}

module.exports = Timestamp;