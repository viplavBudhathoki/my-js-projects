//  Day 6: DOM Basics (getElementById, querySelector, innerText, innerHTML)


// Day 8: Introduction to DOM Manipulation


/* DOM Basics
What is the DOM?
The DOM (Document Object Model) is a tree-like object representation of our HTML page that JavaScript can read and change. 
Every element in HTML (tags, text, attributes) becomes a node we can select and manipulate. */



// Selecting elements (how to get elements from the page)

// document.getElementById(id)
// Returns a single element or null.
// Fast, use when we have an id.

const title = document.getElementById('title');


// document.getElementsByClassName(className)
// Returns a live HTMLCollection (updates when DOM changes).
// Use when you need a collection and expect live updates.

const boxes = document.getElementsByClassName('box'); // live HTMLCollection



// document.getElementsByTagName(tagName)
// Returns live HTMLCollection of elements by tag.
// const ps = document.getElementsByTagName('p');


// document.querySelector(selector)
// Returns the first matching element (supports CSS selectors).
// Very flexible and modern.
// const firstButton = document.querySelector('.btn');


// document.querySelectorAll(selector)
// Returns a static NodeList of matches (not live).
// Use for modern code and easy looping (forEach supported).
// const buttons = document.querySelectorAll('.btn');


/* Remember

Use getElementById for single known IDs (fast).
Use querySelector/querySelectorAll for CSS-like selection.
getElementsByClassName / getElementsByTagName are live collections (can surprise us). */



// Reading/writing content
// innerText vs textContent vs innerHTML

// textContent: returns the text content of an element (fast, returns all text, ignores styles). Good for inserting plain text.
// innerText: returns visible text as rendered (may trigger reflow, slower), respects CSS.
// innerHTML: returns/sets HTML inside element — use to insert HTML markup (dangerous with untrusted data).

// Examples:

const el = document.querySelector('#msg');

el.textContent = 'Hello world';           // safe plain text
el.innerText = 'Hello visible text';      // visible text (respects CSS)
el.innerHTML = '<strong>Bold</strong>';   // inserts HTML (use only with trusted content)

// Security note: never insert user input directly with innerHTML — this can cause XSS. Always sanitize or use textContent.


// Attributes, properties, dataset, and classList
// Attributes vs properties

// getAttribute('attr') / setAttribute('attr', value) read/write HTML attribute.
// Element properties access DOM object directly (el.id, el.value, el.checked).

const input = document.querySelector('input');
input.setAttribute('placeholder', 'Your name');  // attribute
console.log(input.placeholder);                  // property


// dataset
// Access data-* attributes easily.

<div id="card" data-id="42" data-role="admin"></div>

const card = document.getElementById('card');
console.log(card.dataset.id); // "42"
card.dataset.role = 'user';


// classList (recommended for class changes)
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('open');
el.classList.contains('active'); // true/false


// Create / insert / remove elements

// document.createElement(tag)
// parent.appendChild(child) or parent.append(child) (append supports strings)
// parent.insertBefore(newNode, referenceNode)
// element.remove() or parent.removeChild(child)
// element.replaceWith(newElement)

// Example: create a paragraph and append:

const p = document.createElement('p');
p.textContent = 'Hello';
document.body.appendChild(p);

// Tip: Use DocumentFragment to batch many insertions (better performance).



// Event handling
// Use addEventListener (never use inline onclick if you can avoid it).

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
  console.log('clicked', e.target);
});


// Key event concepts:

// e.target — the actual element clicked.
// e.currentTarget — the element the handler is attached to.
// e.preventDefault() — stop default action (useful for form submit).
// e.stopPropagation() — stop event bubbling.


// Event delegation (important)
// Attach a single listener to a parent and detect clicked child by e.target. This is efficient for dynamic lists.

document.querySelector('#list').addEventListener('click', function(e) {
  if (e.target.matches('.delete-btn')) {
    // handle delete
  }
});



// Excercise

/* 
1. Create the Day8_DOM_Basics folder and add the three files above. Run the page and try all features.

2. Modify infoBox.innerHTML to include a small list (<ol><li>One</li>...</ol>) and then change it to textContent — observe difference.

3. Replace the todo creation to use innerHTML = "<li>..</li>" and then change to createElement version — notice security and maintainability.

4. Add a new button that toggles visibility of the to-do form (el.hidden = true/false or classList.toggle('hidden')).

5. Implement localStorage to persist the todo list (optional advanced). */

const infoBox = document.getElementById("infoBox");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const toggleBtn = document.getElementById("toggleFormBtn");

// Step 2: innerHTML example
infoBox.innerHTML = "<ol><li>One</li><li>Two</li><li>Three</li></ol>";

// Try changing this line to:
// infoBox.textContent = "<ol><li>One</li><li>Two</li><li>Three</li></ol>";
// and we’ll see it displays as text, not a list.

// Load saved todos from localStorage (Step 5)
window.addEventListener("load", () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(task => addTodoToList(task));
});

// Step 3: Handle form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();

  if (task === "") return;

  addTodoToList(task);
  saveTodo();
  todoInput.value = "";
});

// Function to add a task (uses createElement)
function addTodoToList(task) {
  const li = document.createElement("li");
  li.textContent = task;
  todoList.appendChild(li);
}

// Save todos to localStorage
function saveTodo() {
  const todos = [];
  todoList.querySelectorAll("li").forEach(li => {
    todos.push(li.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Step 4: Toggle form visibility
toggleBtn.addEventListener("click", () => {
  todoForm.classList.toggle("hidden");
  toggleBtn.textContent = todoForm.classList.contains("hidden")
    ? "Show Form"
    : "Hide Form";
});
