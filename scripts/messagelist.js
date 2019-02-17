class MessageBoard {

  printMessage(message) {
    var newContent = document.createTextNode(`${message.getPreview()} at ${message.formatDate()}`);
    return newContent;
  };

  
}
