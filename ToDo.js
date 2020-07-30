let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let removeButton = document.querySelector('.remove');
let doneButton = document.querySelector('.done');
let clearButton = document.querySelector('.clear');
let todo = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
} 

addButton.addEventListener('click', function() {
  if(!addMessage.value) return;
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };
todoList.push(newTodo);
displayMessages();
localStorage.setItem('todo', JSON.stringify(todoList));
});

removeButton.addEventListener('click', function(event) {
  const checkboxAll = [...document.querySelectorAll('input[type=checkbox]')];
  checkboxAll.forEach(function(item) {
    if(item.checked) item.closest('li').remove();
  });
});

clearButton.addEventListener('click', function(event) {
   todoList = [];
   displayMessages();
localStorage.setItem('todo', JSON.stringify(todoList));
});

doneButton.addEventListener('click', function(event) {
  const checkboxAll = [...document.querySelectorAll('input[type=checkbox]')];
  checkboxAll.forEach(function(item) {
    if(item.checked) item.closest('li').style.backgroundColor = 'gold';
  });
});

function displayMessages() {
  let displayMessage = '';
  if(todoList.length === 0) todo.innerHTML = '';
  todoList.forEach(function(item, index) {
    displayMessage += `
    <li>
      <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
      <label for='item_${index}' class="${item.important ? 'important' : ''}">${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}


