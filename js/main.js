// To do list
function addToDo(){

	var inputValue = document.getElementById("inputValue").value;
	var text = document.createTextNode(inputValue);
	var ul =  document.getElementById("addedItems");
	var li  = document.createElement("li");

	// To add the todo text to an <li>
	li.appendChild(text);


	if(inputValue === ""){

		alert("Empty Textfield");
	}else{

		ul.appendChild(li);
	}

	document.getElementById("inputValue").value = " ";

}