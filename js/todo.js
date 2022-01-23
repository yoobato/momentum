const TODOS_KEY = "toDos";

const toDoListUl = document.querySelector("#toDoList");

let toDos = [];

// Save ToDo to local storage
const saveToDos = () => {
  // Serialize toDos array to JSON string
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const showToDo = (toDoObj) => {
  const containerLi = document.createElement("li");
  containerLi.id = toDoObj.id;

  const contentSpan = document.createElement("span");
  contentSpan.innerText = toDoObj.text;
  containerLi.append(contentSpan);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
  });
  containerLi.append(deleteButton);

  toDoListUl.appendChild(containerLi);
};

const toDoForm = document.querySelector("#toDoForm");
toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const toDoInput = document.querySelector("#toDoInput");
  const toDoObj = {
    id: Date.now(),
    text: toDoInput.value,
  };
  
  toDos.push(toDoObj);
  saveToDos();

  showToDo(toDoObj);
  toDoInput.value = "";
});

// Load ToDo from local storage
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(showToDo);
}
