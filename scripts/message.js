class Message {
	constructor(content, date=Date()){
		this.content = content;
		this.date = date;
	}
	
	getPreview() {
		return this.content.substring(0,20);
	}

	}
	// createMessage(input) { 
	// 	var message = new Message(input);
	// 	return message;
	// };
	
// const message = messagelist.createMessage(grabinput);

