/*
1. Selecting Elements

Goal: Be able to grab anything from the DOM in multiple ways.

<div id="hero">Welcome</div>
<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>
<button class="btn">Click Me</button>


Tasks

Select the div with id="hero" using all possible methods.
Select all <p> tags and log their text.
Select only the first .info using querySelector.
Loop through all .info elements and add “!” to the end of each text.
Add a new class "highlight" to the first <p>.
*/

// Select the <div> with id="hero"
const hero = document.getElementById('hero');

// Select all <p> elements on the page
const p = document.getElementsByTagName('p');

// Select the first element with class "info"
const info = document.querySelector('.info');

// Loop through all <p> elements and log their text content
for (let i = 0; i < p.length; i++){  // should be i < p.length, not i <= p.length
    console.log(p[i].innerText);      // Print text inside each <p>
}

// Select all elements with class "info"
const allInfo = document.querySelectorAll('.info');

// Loop through each element with class "info" and add "!" at the end of its text
allInfo.forEach(el => {
    el.innerText += '!';              // Append "!" to existing text
});

// Add a new class "highlight" to the first <p> element
p[0].classList.add('highlight');      // Changes styling if "highlight" class has CSS





/*
2. Reading & Writing Content

Goal: Understand innerText, textContent, and innerHTML.

<div id="msg"><span style="display:none;">Hidden</span> Visible</div>

Tasks

Print innerText, textContent, and innerHTML — compare outputs.
Change only the visible text to "Hello DOM!".
Insert <strong>Bold!</strong> using innerHTML.
Replace the text with "Plain text" using textContent.
Try inserting a <script> tag with innerHTML — observe why it’s unsafe.
*/

const div = document.getElementById('msg');

// Print innerText, textContent, and innerHTML
console.log("innerText:", div.innerText);      // Only visible text
console.log("textContent:", div.textContent);  // All text including hidden
console.log("innerHTML:", div.innerHTML);      // HTML inside the div

// Change only the visible text
div.innerText = "Hello DOM!";

// Insert HTML content
div.innerHTML = "<strong>Bold!</strong>";

// Replace with plain text
div.textContent = "Plain text";

// Insert a script tag (unsafe)
div.innerHTML = "<script>alert('Hi');</script>";  // Won’t run when inserted this way




/*
3. Attributes, Properties & classList

Goal: Learn to read/write element attributes, dataset, and classes.

<input type="text" id="username" placeholder="Enter name" data-role="user">
<button id="themeBtn">Toggle Dark Mode</button>

Tasks

Change the placeholder text using setAttribute.
Access the value property (difference between attribute vs property).
Log the data-role attribute using dataset.
Add data-id="99" dynamically.
Toggle "dark" class on body using button click.
Check if "dark" class exists — log true/false.
*/

// Select the input element with id="username"
const username = document.getElementById('username');

// Change the placeholder text of the input using setAttribute()
username.setAttribute("placeholder", "Enter your name");

// Log the current value typed inside the input box (property)
// If user hasn't typed anything yet, it will show an empty string ("")
console.log(username.value);

// Log the placeholder attribute value directly from the HTML (attribute)
console.log(username.getAttribute("placeholder"));

// Log the value of the data-role attribute (from data-role="user")
console.log(username.dataset.role);

// Dynamically add a new custom attribute data-id="99" to the input element
username.dataset.id = "99";

// Select the button element ( make sure the id matches exactly: "themeBtn")
const themeBtn = document.getElementById('themebtn');

// Add a click event listener to the button
themeBtn.addEventListener('click', () => {
  // When the button is clicked, toggle the "dark" class on the <body> element
  // If "dark" is not present, it will be added
  // If "dark" is already present, it will be removed
  document.body.classList.toggle('dark');
});

// Check whether the <body> element currently has the "dark" class
// Returns true or false
console.log(document.body.classList.contains('dark'));





/*
4. Creating & Inserting Elements

Goal: Dynamically add content using JavaScript.

Tasks

Create a new <p> tag and append it to <body>.
Create a new <li> and add it before the 2nd item of a <ul>.

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

Create a new <div> with class "card" and text "Dynamic card".
Replace an existing element with a new one using replaceWith().
Remove the first <p> using .remove().
Batch-create 5 list items using DocumentFragment (for performance).
*/

// Create a new <p> and append to body
const para = document.createElement('p');
para.textContent = "This is a paragraph added with JS.";
document.body.appendChild(para);

// Create a new <li> and add it before 2nd item of <ul>
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = "New Item";
const secondItem = ul.children[1];
ul.insertBefore(newLi, secondItem);

// Create a new <div> with class "card" and text
const division = document.createElement('div');
division.classList.add('card');
division.textContent = "Dynamic Card";
document.body.appendChild(division);

// Replace the div with a new <p>
const oldDiv = document.querySelector('.card');
const newPara = document.createElement('p');
newPara.textContent = "I am a high paid developer";
oldDiv.replaceWith(newPara);

// Remove the first <p>
para.remove();

// Batch-create 5 list items using DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 5; i++){
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
ul.appendChild(fragment);




/*
5. Events & Handlers

Goal: Respond to user actions with JavaScript.

<button id="clickBtn">Click Me</button>
<input type="text" id="nameInput" placeholder="Type here...">
<form id="form"><input type="text"><button>Submit</button></form>

Tasks

Add a click listener that logs “Button Clicked”.
Add an event that changes button color when clicked.
Log whatever you type in #nameInput (on input event).
Prevent the form from refreshing using preventDefault().
Log both e.target and e.currentTarget for nested divs (to see bubbling).
Add two nested divs — show how stopPropagation() works.
*/

const clickBtn = document.getElementById('clickBtn'); // Select the button element with id 'clickBtn'

clickBtn.addEventListener('click', () =>{
  console.log("Button Clicked");
});

clickBtn.addEventListener('click', ()=>{
  clickBtn.style.backgroundColor = 'orange';
});

const nameInput = document.getElementById('nameInput'); // Select the input field with id 'nameInput'

nameInput.addEventListener('input',(e) =>{
  console.log("You typed: ", e.target.value);
});

const form = document.getElementById('form'); // Select the form element with id 'form'

form.addEventListener('submit', (e) =>{
  e.preventDefault();   // Prevents the default form submission behavior (page refresh)
  console.log("Form submitted but page did NOT refresh")
});




/*
6. Event Delegation

Goal: Handle multiple dynamic elements with one listener.

<ul id="userList">
  <li>Viplav <button class="delete-btn">X</button></li>
  <li>Sankalpa <button class="delete-btn">X</button></li>
</ul>

Tasks

Add one event listener to #userList that detects any delete button click.
Remove the parent <li> when “X” is clicked.
Add new users dynamically — check if delete still works.
Highlight the clicked user using classList.toggle('active').
Add console logs for e.target and e.currentTarget.
*/

    // Grab elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCounter = document.getElementById('taskCounter');
    const hideFormBtn = document.getElementById('hideFormBtn');
    const formContainer = document.getElementById('formContainer');
    const clearAllBtn = document.getElementById('clearAllBtn');

    // Update task counter
    function updateCounter() {
      taskCounter.textContent = taskList.children.length;
    }

    // Add new task
    function addTask() {
      const taskText = taskInput.value.trim();
      if(!taskText) return alert("Task cannot be empty!");

      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = taskText;
      li.appendChild(span);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "X";
      deleteBtn.classList.add('delete-btn');
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
      taskInput.value = "";
      updateCounter();
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') addTask();
    });

    // Delete task using event delegation
    taskList.addEventListener('click', (e) => {
      if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        updateCounter();
      }
    });

    // Hide/show form
    hideFormBtn.addEventListener('click', () => {
      formContainer.classList.toggle('hidden');
    });

    // Clear all tasks
    clearAllBtn.addEventListener('click', () => {
      taskList.innerHTML = "";
      updateCounter();
    });