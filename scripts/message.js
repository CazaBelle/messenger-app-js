class Message {
	constructor(content, date= new Date()){
		this._content = content;
		this._date = date;
	}

		getPreview(){
			return this._content.substring(0,20)
		}

		formatDate(){
			return this._date.toLocaleDateString();
		}
	}


