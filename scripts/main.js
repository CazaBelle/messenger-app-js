var messagelist = new MessageBoard();
var submit_button = document.getElementById('button'); 

submit_button.addEventListener('click', function () {
	const grabinput = document.getElementById('user_input').value;
	const message = new Message(grabinput);
	// arr.push(create_message)
	const currentLi = document.getElementById('list');
	const newLi = document.createElement('li');
	const text = messagelist.printMessage(message);
	newLi.appendChild(text);
	currentLi.appendChild(newLi);
	
}); 


	// Message List class - display 