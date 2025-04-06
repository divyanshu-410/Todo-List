document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
  
    if (todoText) {
      const todoList = document.getElementById('todo-list');
      const newTask = document.createElement('li');
      newTask.textContent = todoText;
  
      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '❌';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(newTask);
      });
  
      newTask.appendChild(deleteBtn);
      todoList.appendChild(newTask);
      input.value = '';
    }
  });
  