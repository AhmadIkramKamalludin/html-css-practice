// ========================================
// JAVASCRIPT FUNDAMENTALS - COMPLETE
// ========================================

console.log("=== VARIABLES ===");
let name = "Ahmad Ikram";
let age = 22;
let isStudent = true;
console.log(name);
console.log(age);
console.log(isStudent);

console.log("=== DATA TYPES ===");
console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean

console.log("=== OPERATORS ===");
console.log(10 + 5);           // 15
console.log(10 > 5);           // true
console.log(true && false);    // false

console.log("=== CONDITIONALS ===");
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

console.log("=== FUNCTIONS ===");
function greet(person) {
    return "Hello " + person;
}
console.log(greet("Ahmad"));

console.log("=== ARRAYS ===");
let subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects[0]);      // HTML
console.log(subjects.length);  // 3

console.log("=== LOOPS ===");
for (let i = 1; i <= 3; i++) {
    console.log("Number: " + i);
}

console.log("=== LOOP THROUGH ARRAY ===");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}