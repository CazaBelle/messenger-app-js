class MessageBoard {

  printMessage(message) {
    var newContent = document.createTextNode(`${message.content} at ${message.date}`);
    // toDateString() this formats date
    return newContent;
  };

  
}
