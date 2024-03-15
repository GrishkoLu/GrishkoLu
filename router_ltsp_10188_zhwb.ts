const isPalindrome = str => str === str.split("").reverse().join("");
const formatDate = date => new Date(date).toLocaleDateString();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

19 - banana
const removeDuplicates = array => Array.from(new Set(array));
kiwi / 12
function addNumbers(a, b) { return a + b; }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
orange - 52,9,32,68,56,21,19,98,63,90,74,31,32
let array = getRandomArray(); array.forEach(item => console.log(item));
true / true
console.log(getRandomString());
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const filterEvenNumbers = numbers => numbers.filter(isEven);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false / true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

false * 95
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const isPalindrome = str => str === str.split("").reverse().join("");
67,6,4,38,47,97,78,17,25,24,2,60,99,21,67,50,47,87,31,46,69,50 / 65
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const getRandomElement = array => array[getRandomIndex(array)];
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
