function getCurrentTimestamp(){
  let timestamp = {};
  
  let date = new Date();
  timestamp.unix = date.valueOf();
  timestamp.utc = date.toUTCString();

  return timestamp;
}

module.exports = {
  getCurrentTimestamp
};