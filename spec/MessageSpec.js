describe("Message", function(){
  var message;
  var datetime;
  

  beforeEach(function() {
    let datetime = "16/01/2019";
    message = new Message("This is a really long test", "16/01/2019");
    
  });
 
  it("should have a message class", function() {
    expect(message instanceof Message).toBe(true);
  });
  it("should be able to display a Message", function(){
    console.log(message)
    expect(message._content).toEqual("This is a really long test");
  });
  it("should be able to display a date", function(){
    console.log(message)
    expect(message._date).toEqual("16/01/2019");
  });

  it("should be shorten the message before posting", function(){
    expect(message.getPreview()).toEqual("This is a really lon")
  });

  it("should return a formatted date before posting", function(){
    message2 = new Message("hello world")
    expect(message2.formatDate()).toEqual("17/02/2019")
  })

});