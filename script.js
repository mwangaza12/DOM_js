// Accessing the body of the document
const body = document.body;

// creating an element
const div = document.createElement('div');
div.innerHTML = 'Hello world';
body.append(div);


// differentiating between innerText and textContent
const div = document.querySelector('div');
console.log(div.textContent)
console.log(div.innerText)


// Not the right way due to security issues
const div = document.createElement('div')
div.innerHTML = "<strong>Hello world2</strong>"
body.append(div)

// The right way
const div = document.createElement('div');
const strong = document.createElement('strong');
strong.innerText = 'Hello worlrd';
div.append(strong);
body.append(div)

// removing an element from the DOM
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

spanBye.remove();
div.append(spanBye);

div.removeChild(spanHi);

// Accessing element attributes
console.log(spanHi.getAttribute('id'));
console.log(spanHi.title)

spanHi.removeAttribute('id')

spanHi.classList.remove('hi1')


// Map function

const numbers = [1,2,3,4,5];

const squares =  numbers.map(square);
console.log(squares);

const cubes =  numbers.map(cube);
console.log(cubes);

function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}


const students = ["Joseph","Mwangaza","Mokoli"];

const studentsUppercase = students.map(upperCase);
const slowerCase = studentsUppercase.map(lowerCase)
console.log(slowerCase);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10","2025-02-20","2026-03-30"];

const formatDates = dates.map(formatDate);
console.log(formatDates)

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}


// filter method
const evenNums = numbers.filter(isEven)
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

const people = [
    {firstname: "Joseph", lastname: "Mwangaza"},
    {firstname: "Daniel", lastname: "Kaguru"},
    {firstname: "Brian", lastname: "Gakenye"},
    {firstname: "Ascah", lastname: "Kepha"},
];

let allFullNames = people.map(fullName);
console.log(allFullNames);

function fullName(element){
    return `${element.firstname} ${element.lastname}`
}

const p = document.querySelector("p");

function changeText(){
    p.innerText = 'Coding is Fun';
}


const div = document.querySelector(".container");
function changeBackgroundColor(){
    div.style.backgroundColor = 'blue';
}