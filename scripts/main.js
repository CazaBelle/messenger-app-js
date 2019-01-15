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


function grabInput()
{
var written_message = document.getElementById('user_input').value;
console.log(written_message);
}

// var text = document.getElementById('user_input').value;
// return text
