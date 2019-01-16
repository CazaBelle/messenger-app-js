arr = [];
const submit_button = document.getElementById('button'); 
const current = document.getElementById('list');

class Message {
	constructor(content, date){
		this.content = content;
		this.date = date;
	}
}


const handleClick = () => {
	const grabinput = document.getElementById('user_input').value;
	const create_message = new Message(grabinput, new Date );
	arr.push(create_message)
	displayMessage(create_message);
		
	}; 

	const displayMessage = (message) => {
		const newLi = document.createElement('li');
		const newContent = document.createTextNode(`${message.content} at ${message.date.toDateString()}`);
		newLi.appendChild(newContent);
		current.appendChild(newLi)
	};

	submit_button.addEventListener('click', handleClick);


