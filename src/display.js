const display = (taskLists, tasksContainer) => {
  const sortedTodos = taskLists.list.sort((a, b) => a.index - b.index);
  tasksContainer.innerHTML = '';
  let todosHtml = '';
  sortedTodos.forEach((task) => {
    const checkedTodo = task.completed ? 'checked' : '';
    const checkClass = task.completed ? 'checked' : '';
    todosHtml += `  <div class="task-item">
                              <div>
                                  <input id="${task.id}" type="checkbox" class="task-check" ${checkedTodo} />
                                  <input id="${task.id}" type="text" class="task-edit" ${checkClass} value="${task.description}" />
                              </div>
                              <button id="${task.id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                          </div>
          `;
  });

  tasksContainer.innerHTML = todosHtml;

  // remove task 
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      taskLists.RemoveTask(e.target.parentNode.id);
    });
  });

  // modify a task
  const todosContent = document.querySelectorAll('.task-edit');
  todosContent.forEach((task) => {
    task.addEventListener('change', (e) => {
      taskLists.EditTask(e.target.id, e.target.value);
    });
  });

  // Complete a task
  const taskCheck = document.querySelectorAll('.task-check');
  taskCheck.forEach((task) => {
    task.addEventListener('change', (e) => {
      const { id } = e.target;
      taskLists.CompleteTask(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};
export default display;
