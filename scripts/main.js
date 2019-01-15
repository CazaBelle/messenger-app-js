submit_button = document.getElementById('button'); 

submit_button.addEventListener('click', function() { 
	var message_content = document.getElementById('user_input').value; 
	var class_test = new Message(message_content, new Date);
	console.log(class_test) });



// button = document.getElementById('button');



// button.addEventListener('click', function() { 
	
//    	console.log(class_test) });

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




// function grabInput()
// {
// var written_message = document.getElementById('user_input').value;
// console.log(written_message.value);
// }

// var text = document.getElementById('user_input').value;
// return text
