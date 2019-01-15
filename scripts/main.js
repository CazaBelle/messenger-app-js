button = document.getElementById('button');

button.addEventListener('click', function() { 
	var class_test = new Message("Yo bishbish", new Date);
   	console.log(class_test) });

class Message {
	constructor(content, date){
		this.content = content;
		this.date = date;
	}
}

// function grabInput()
// {
// var written_message = document.getElementById("user_input");
// console.log(written_message);
// }

submit_button = document.getElementById('submit'); 

submit_button.addEventListener('click', function() { 
	var message_content = document.getElementById('user_input').value; 
	console.log(message_content) });


function grabInput()
{
var written_message = document.getElementById('user_input').value;
console.log(written_message.value);
}

// var text = document.getElementById('user_input').value;
// return text
