const input = document.getElementById('todoInput')
function addTodo() {
	const ul = document.getElementById('todoList');
	const li = document.getElementById('li');

	li.textContent = input.value;
	input.value = "";
	ul.appendChild(li);
}

input.addEventListener(
		'keydown',
		function(event){
			if (event.key == "Enter") addTodo();
		}
)
//function changeText() {
	//const button = document.getElementById('button');
//alert(button.textContent);
//button.textContent}

