const Timestamp = require("../timestamp.js");

describe("Timestamp test suite:",function(){

  describe("Expectations for Get current timestamp",function(){
    let timestamp = new Timestamp();
    let result = timestamp.getCurrent();

    it("function should return JSON object",function(){
      expect(result).not.toBe(null);
      expect(typeof result).toBe("object");
    })

    it("function should return JSON object with unix key",function(){
      expect(result.hasOwnProperty('unix')).toBe(true);
    })

    it("function should return JSON object with utc key",function(){
      expect(result.hasOwnProperty('utc')).toBe(true);
    })
  })

  describe("get from date",function(){
    let timestamp = new Timestamp();
    
    describe("function should return JSON object",function(){
      let date = '2015-12-25';
      let result = timestamp.getFromDate(date);
      date = new Date(date);

      it(":",function(){
        expect(result).not.toBe(null);
        expect(typeof result).toBe("object");
      })

      it("with unix key that is a Unix timestamp of the input date in milliseconds",function(){
        expect(result.hasOwnProperty('unix')).toBe(true);
        expect(result.unix).toBe(date.valueOf());
      })

      it("with utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT",function(){
        expect(result.hasOwnProperty('utc')).toBe(true);
        expect(result.utc).toBe(date.toUTCString());
      })

    })

    it("1451001600000 should return { unix: 1451001600000, utc: \"Fri, 25 Dec 2015 00:00:00 GMT\" }",function(){
      let date = '1451001600000';
      let result = timestamp.getFromDate(date);
      date = new Date(date);

      let expected = {
        unix: 1451001600000,
        utc: "Fri, 25 Dec 2015 00:00:00 GMT"
      }

      expect(result).toEqual(expected);
    })
  })

  describe("If the input date string is invalid,",function(){
    let date = 'Thursday';
    let timestamp = new Timestamp();
    let result = timestamp.getFromDate(date);
    
    it("the api returns an object having the structure { error : \"Invalid Date\" }",function(){
      let expected= { error: "Invalid Date"};
      expect(result).toEqual(expected);
    })

  })

})