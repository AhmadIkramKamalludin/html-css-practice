// ========================================
// EVENT LISTENERS PRACTICE
// ========================================

console.log("=== Event Listeners ===");

// -------- CLICK EVENT --------
let submitBtn = document.querySelector("button");

if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        console.log("Submit button was clicked!");
        submitBtn.style.backgroundColor = "green";
        submitBtn.textContent = "Message Sent! ✅";
    });
}

// -------- INPUT EVENT --------
let nameInput = document.querySelector("input[name='name']");

if (nameInput) {
    nameInput.addEventListener("input", function() {
        console.log("Name input: " + nameInput.value);
    });
}

// -------- EMAIL INPUT --------
let emailInput = document.querySelector("input[name='email']");

if (emailInput) {
    emailInput.addEventListener("input", function() {
        console.log("Email input: " + emailInput.value);
    });
}

// -------- MOUSEOVER EVENT --------
let sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f0f0f0";
        console.log("Mouse over section");
    });
    
    sections[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
        console.log("Mouse left section");
    });
}

// -------- FORM SUBMIT --------
let form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Stop page reload
        
        console.log("Form submitted!");
        console.log("Name: " + nameInput.value);
        console.log("Email: " + emailInput.value);
        
        // Show success message
        alert("Form submitted! Thank you!");
    });
}

console.log("Event listeners attached!");
