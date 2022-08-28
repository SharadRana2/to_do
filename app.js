const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `<li class="list-group-item bg-light-box list-items">
  <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
  list.innerHTML += html;
};

const filterTodos = (term) => {
  // add filter class
  Array.from(list.children)
    .filter((item) => !item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.add("filter"));

  // remove filter class
  Array.from(list.children)
    .filter((item) => item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.remove("filter"));
};

// add todos event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos event
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

