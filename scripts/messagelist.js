class MessageBoard {

  printMessage(message) {
    var newContent = document.createTextNode(`${message.content.substring(0,5)} at ${message.date}`);
    // toDateString() this formats date
    return newContent;
  };

  
}
