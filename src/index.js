import './style.css';
import display from './display.js';
import Tasks from './tasks.js';

const tasksContainer = document.querySelector('.tasks-container');
const taskLists = new Tasks();
display(taskLists, tasksContainer);

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-todo').value.trim();
  const completed = false;
  const index = taskLists.list.length + 1;
  const newTask = {
    id, description, completed, index,
  };
  if (description) {
    taskLists.addTask(newTask);
    display(taskLists, tasksContainer);
  }
});

// clear all completed tasks
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  taskLists.clearCompletedTasks();
  display(taskLists, tasksContainer);
});
