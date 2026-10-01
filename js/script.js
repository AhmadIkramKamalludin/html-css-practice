// ========================================
// DOM MANIPULATION PRACTICE
// ========================================

console.log("=== DOM Manipulation ===");

// -------- SELECT ELEMENTS --------
let heading = document.querySelector("h1");
let sections = document.querySelectorAll("section");
let submitBtn = document.querySelector("button");

console.log("Heading:", heading);
console.log("Number of sections:", sections.length);
console.log("Button:", submitBtn);

// -------- CHANGE TEXT --------
heading.textContent = "Ahmad Ikram - Web Developer Portfolio";
console.log("Changed heading text");

// -------- CHANGE STYLES --------
heading.style.color = "blue";
heading.style.fontSize = "40px";
console.log("Changed heading style");

// -------- CHANGE MULTIPLE STYLES --------
if (submitBtn) {
    submitBtn.style.backgroundColor = "green";
    submitBtn.style.padding = "15px 30px";
    submitBtn.style.fontSize = "18px";
    console.log("Changed button style");
}

// -------- GET ELEMENT TEXT --------
console.log("Heading text is:", heading.textContent);

// -------- ADD CLASS --------
heading.classList.add("highlighted");
console.log("Added class to heading");

// -------- GET ELEMENT BY ID --------
let homeSection = document.querySelector("#home");
if (homeSection) {
    homeSection.style.backgroundColor = "#f0f0f0";
    console.log("Changed home section background");
}

// -------- LOOP THROUGH ELEMENTS --------
console.log("All sections:");
for (let i = 0; i < sections.length; i++) {
    console.log(i, sections[i].innerHTML.substring(0, 50));
}

// -------- GET FORM INPUTS --------
let nameInput = document.querySelector("input[name='name']");
let emailInput = document.querySelector("input[name='email']");

console.log("Name input:", nameInput);
console.log("Email input:", emailInput);

// -------- GET INPUT VALUE --------
if (nameInput) {
    console.log("Name input placeholder:", nameInput.placeholder);
}

// ========================================
// PRACTICAL DOM EXAMPLES
// ========================================

// Example 1: Change all section backgrounds
let allSections = document.querySelectorAll("section");
for (let i = 0; i < allSections.length; i++) {
    allSections[i].style.borderRadius = "10px";
    console.log("Section " + i + " border updated");
}

// Example 2: Get all input fields and log them
let allInputs = document.querySelectorAll("input");
console.log("Total inputs:", allInputs.length);
for (let i = 0; i < allInputs.length; i++) {
    console.log("Input " + i + ":", allInputs[i].type);
}

// Example 3: Change footer text
let footer = document.querySelector("footer");
if (footer) {
    footer.textContent = "© 2024 Ahmad Ikram - Made with ❤️";
}

// Example 4: Add style to multiple elements
let allButtons = document.querySelectorAll("button");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.cursor = "pointer";
    allButtons[i].style.transition = "0.3s";
}