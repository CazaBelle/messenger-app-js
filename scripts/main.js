let messageboard = new MessageBoard();
var submit_button = document.getElementById('button'); 
var currentLi = document.getElementById('list');

submit_button.addEventListener('click', function () {
	const grabinput = document.getElementById('user_input').value;
	let message = new Message(grabinput);
	
	// arr.push(create_message)
	
	var newLi = document.createElement('li');
	var text = messageboard.printMessage(message);

	console.log(text)

	newLi.appendChild(text);
	currentLi.prepend(newLi);
	
}); 
	// Message List class - display 