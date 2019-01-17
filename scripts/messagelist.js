class MessageBoard {

  prinMessage(message) {
    var newContent = document.createTextNode(`${message.content} at ${message.date}`);
    // toDateString() this formats date
    return newContent;
  };

}
