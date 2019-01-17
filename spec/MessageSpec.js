describe("Message", function(){
  var message;
  var datetime;
  

  beforeEach(function() {
    // text = "I'm a test"
    datetime = "16/01/2019";
    message = new Message("hello world", "16/01/2019");
    
  });
 
it("should have a message class", function() {
  expect(message instanceof Message).toBe(true);
});

it("should be able to display a Message", function(){
  console.log(message)
  expect(message.content).toEqual("hello world");
});

it("should be able to display a Message", function(){
  console.log(message)
  expect(message.date).toEqual("16/01/2019");
});

});