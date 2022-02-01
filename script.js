const todosList = document.getElementById("todo__container"); //3
const input = document.getElementById("todo"); //8
const button = document.getElementById("btn-submit"); //9
const form = document.getElementById("form");

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => takeData(json));
  return;
} //1
fetchData();

function takeData(val) {
  renderData(val.slice(1, 11));
  return val.slice(1, 11);
} //2

function checkTodos(val) {
  let bool = "false";
  val === true ? (bool = "COMPLETED") : (bool = "UNCOMPLETED");
  return bool;
} //7

function renderData(dataSlice) {
  let list = dataSlice
    .map(
      (todo, i) =>
        `<li class="todo">
		
   <p>${i + 1}. ${todo.title} - ${checkTodos(todo.completed)}</p>
 </li>`
    ) //5
    .join(" "); //6

  //7 i + 1

  todosList.innerHTML = list;
} //4

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  let data = {
    title: input.value,
    completed: false,
    userId: 1,
  };

  postData(data);

  input.value = "";
});

function postData(data) {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
