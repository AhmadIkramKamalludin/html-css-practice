// ========================================
// FORM HANDLING IN TYPESCRIPT
// ========================================

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    category: string;
    source?: string;
    interests?: string[];
}

const form = document.querySelector("form") as HTMLFormElement | null;
const nameInput = document.querySelector("input[name='name']") as HTMLInputElement | null;
const emailInput = document.querySelector("input[name='email']") as HTMLInputElement | null;
const subjectInput = document.querySelector("input[name='subject']") as HTMLInputElement | null;
const messageInput = document.querySelector("textarea[name='message']") as HTMLTextAreaElement | null;
const categorySelect = document.querySelector("select[name='category']") as HTMLSelectElement | null;

function validateEmail(email: string): boolean {
    return email.includes("@") && email.includes(".");
}

function validateForm(data: ContactFormData): boolean {
    if (data.name === "") {
        alert("❌ Please enter your name");
        return false;
    }
    
    if (data.name.length < 2) {
        alert("❌ Name must be at least 2 characters");
        return false;
    }
    
    if (data.email === "") {
        alert("❌ Please enter your email");
        return false;
    }
    
    if (!validateEmail(data.email)) {
        alert("❌ Please enter a valid email");
        return false;
    }
    
    if (data.subject === "") {
        alert("❌ Please enter a subject");
        return false;
    }
    
    if (data.message === "") {
        alert("❌ Please enter your message");
        return false;
    }
    
    if (data.message.length < 10) {
        alert("❌ Message must be at least 10 characters");
        return false;
    }
    
    if (data.category === "") {
        alert("❌ Please select a category");
        return false;
    }
    
    return true;
}

function getFormData(): ContactFormData {
    const name: string = nameInput!.value.trim();
    const email: string = emailInput!.value.trim();
    const subject: string = subjectInput!.value.trim();
    const message: string = messageInput!.value.trim();
    const category: string = categorySelect!.value;
    
    const sourceRadio = document.querySelector("input[name='source']:checked") as HTMLInputElement | null;
    const source: string = sourceRadio ? sourceRadio.value : "Not selected";
    
    const interestCheckboxes = document.querySelectorAll("input[name='interest']:checked");
    const interests: string[] = [];
    
    interestCheckboxes.forEach((checkbox) => {
        interests.push((checkbox as HTMLInputElement).value);
    });
    
    return {
        name,
        email,
        subject,
        message,
        category,
        source,
        interests
    };
}

if (form) {
    form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();
        
        const formData: ContactFormData = getFormData();
        
        console.log("=== Form Submitted ===");
        console.log("Name:", formData.name);
        console.log("Email:", formData.email);
        console.log("Subject:", formData.subject);
        console.log("Message:", formData.message);
        console.log("Source:", formData.source);
        console.log("Interests:", formData.interests);
        console.log("Category:", formData.category);
        
        if (validateForm(formData)) {
            console.log("✅ All validation passed!");
            alert(`✅ Thank you ${formData.name}!\n\nYour message was received.\nI'll get back to you soon at ${formData.email}`);
            
            form.reset();
            console.log("=== Form Cleared ===");
        }
    });
}

console.log("TypeScript Form Handler Ready!");