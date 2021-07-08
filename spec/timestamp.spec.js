const Timestamp = require("../timestamp.js");

describe("Timestamp test suite",function(){

  describe("Expectations for Get current timestamp",function(){
    let timestamp = new Timestamp();
    let result = timestamp.getCurrent();

    it("function should return JSON object",function(){
      expect(result).not.toBe(null);
      expect(typeof result).toBe("object");
    })

    it("function should return JSON object with unix key.",function(){
      expect(result.hasOwnProperty('unix')).toBe(true);
    })

    it("function should return JSON object with utc key.",function(){
      expect(result.hasOwnProperty('utc')).toBe(true);
    })
  })

})