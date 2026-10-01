// ========================================
// FORM HANDLING FOR AHMAD IKRAM PORTFOLIO
// ========================================

console.log("=== Form Ready ===");

// Select all form elements
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");
const categorySelect = document.querySelector("select[name='category']");

// -------- FORM SUBMIT HANDLER --------
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Stop page reload
        
        console.log("=== Form Submitted ===");
        
        // Get all values
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let subject = subjectInput.value.trim();
        let message = messageInput.value.trim();
        let category = categorySelect.value;
        
        // Get selected radio button (how found me)
        let sourceRadio = document.querySelector("input[name='source']:checked");
        let source = sourceRadio ? sourceRadio.value : "Not selected";
        
        // Get selected checkboxes (interests)
        let interestCheckboxes = document.querySelectorAll("input[name='interest']:checked");
        let interests = [];
        for (let i = 0; i < interestCheckboxes.length; i++) {
            interests.push(interestCheckboxes[i].value);
        }
        
        // Log everything
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
        console.log("Source:", source);
        console.log("Interests:", interests);
        console.log("Category:", category);
        
        // -------- VALIDATION --------
        
        // Check name
        if (name === "") {
            alert("❌ Please enter your name");
            nameInput.focus();
            return;
        }
        
        if (name.length < 2) {
            alert("❌ Name must be at least 2 characters");
            return;
        }
        
        // Check email
        if (email === "") {
            alert("❌ Please enter your email");
            emailInput.focus();
            return;
        }
        
        if (!email.includes("@") || !email.includes(".")) {
            alert("❌ Please enter a valid email");
            return;
        }
        
        // Check subject
        if (subject === "") {
            alert("❌ Please enter a subject");
            subjectInput.focus();
            return;
        }
        
        // Check message
        if (message === "") {
            alert("❌ Please enter your message");
            messageInput.focus();
            return;
        }
        
        if (message.length < 10) {
            alert("❌ Message must be at least 10 characters");
            return;
        }
        
        // Check category
        if (category === "") {
            alert("❌ Please select a category");
            return;
        }
        
        // -------- ALL VALID - SHOW SUCCESS --------
        console.log("✅ All validation passed!");
        
        alert("✅ Thank you " + name + "!\n\nYour message was received.\nI'll get back to you soon at " + email);
        
        // Clear form
        form.reset();
        
        // Log submission
        console.log("=== Form Cleared ===");
    });
}

// -------- REAL-TIME VALIDATION (Optional) --------

// Email validation while typing
if (emailInput) {
    emailInput.addEventListener("input", function() {
        let email = emailInput.value;
        
        if (email.includes("@") && email.includes(".")) {
            emailInput.style.borderColor = "green";
        } else {
            emailInput.style.borderColor = "#ddd";
        }
    });
}

// Name validation while typing
if (nameInput) {
    nameInput.addEventListener("input", function() {
        console.log("Name: " + nameInput.value);
    });
}

// Message character counter
if (messageInput) {
    messageInput.addEventListener("input", function() {
        let length = messageInput.value.length;
        console.log("Message length: " + length + " characters");
    });
}

// Radio button selection
let radioButtons = document.querySelectorAll("input[name='source']");
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function() {
        console.log("Selected source: " + this.value);
    });
}

// Checkbox selection
let checkboxes = document.querySelectorAll("input[name='interest']");
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
        console.log("Checkbox " + this.value + " is " + (this.checked ? "checked" : "unchecked"));
    });
}

console.log("Form handlers attached to all elements!");