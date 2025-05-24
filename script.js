// Accessing the body of the document
const pageBody = document.body;

// Creating and appending a new element
const greetingDiv = document.createElement('div');
greetingDiv.innerHTML = 'Hello world';
pageBody.append(greetingDiv);


// Differentiating between innerText and textContent
console.log("textContent:", greetingDiv.textContent);
console.log("innerText:", greetingDiv.innerText);


// ❌ Not recommended: Setting innerHTML directly (Security Risk)
const unsafeDiv = document.createElement('div');
unsafeDiv.innerHTML = "<strong>Hello world2</strong>";
pageBody.append(unsafeDiv);


// ✅ Recommended: Creating elements the safe way
const safeDiv = document.createElement('div');
const strongText = document.createElement('strong');
strongText.innerText = 'Hello safe world';
safeDiv.append(strongText);
pageBody.append(safeDiv);


// Removing and moving elements
const hiSpan = document.querySelector('#hi');
const byeSpan = document.querySelector('#bye');

// Example: Moving the byeSpan into another element
safeDiv.append(byeSpan);

// Example: Removing an element
// hiSpan.remove();

// Accessing element attributes
console.log("ID of hiSpan:", hiSpan.getAttribute('id'));
console.log("Title of hiSpan:", hiSpan.title);

// Modifying element attributes and classes
hiSpan.removeAttribute('id');
hiSpan.classList.remove('hi1');


// Array methods: map()
const numberArray = [1, 2, 3, 4, 5];

function square(num) {
    return Math.pow(num, 2);
}

function cube(num) {
    return Math.pow(num, 3);
}

const squaredNumbers = numberArray.map(square);
console.log("Squares:", squaredNumbers);

const cubedNumbers = numberArray.map(cube);
console.log("Cubes:", cubedNumbers);


// Working with strings
const studentNames = ["Joseph", "Mwangaza", "Mokoli"];

function toUpperCaseName(name) {
    return name.toUpperCase();
}

function toLowerCaseName(name) {
    return name.toLowerCase();
}

const uppercasedStudents = studentNames.map(toUpperCaseName);
const lowercasedStudents = uppercasedStudents.map(toLowerCaseName);
console.log("Lowercased again:", lowercasedStudents);


// Date formatting example
const rawDates = ["2024-1-10", "2025-02-20", "2026-03-30"];

function reformatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${month}/${day}/${year}`;
}

const formattedDates = rawDates.map(reformatDate);
console.log("Formatted Dates:", formattedDates);


// Using filter()
function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = numberArray.filter(isEven);
console.log("Even Numbers:", evenNumbers);


// Mapping objects to full names
const peopleList = [
    { firstname: "Joseph", lastname: "Mwangaza" },
    { firstname: "Daniel", lastname: "Kaguru" },
    { firstname: "Brian", lastname: "Gakenye" },
    { firstname: "Ascah", lastname: "Kepha" },
];

function getFullName(person) {
    return `${person.firstname} ${person.lastname}`;
}

const fullNames = peopleList.map(getFullName);
console.log("Full Names:", fullNames);


// DOM Text Manipulation
const paragraphElement = document.querySelector("p");

function updateTextContent() {
    paragraphElement.innerText = 'Coding is Fun';
}


// Changing styles dynamically
function applyBlueBackground() {
    safeDiv.style.backgroundColor = 'blue';
}


// Event Handling Example
const clickButton = document.querySelector('#myBtn');

clickButton.addEventListener('click', function () {
    alert('You clicked the button!');
});

// How to update form inputs values
const myInput = document.querySelector('#myInput');
let inputValue = document.querySelector('#inputValue');

myInput.addEventListener('input',function(){
    inputValue.textContent = myInput.value;
});
