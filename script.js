// ----------------------
// Light/Dark Mode Toggle
// ----------------------
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggles dark mode class
});

// ----------------------
// Click Counter
// ----------------------
let count = 0;
const clickCount = document.getElementById('clickCount');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
});

// ----------------------
// FAQ Collapsible
// ----------------------
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show'); // Toggle visibility
    });
});

// ----------------------
// Form Validation
// ----------------------
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags
    let valid = true;
    let messages = [];

    // Name validation
    if (name.length < 3) {
        valid = false;
        messages.push("Name must be at least 3 characters.");
    }

    // Email validation using regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        messages.push("Enter a valid email address.");
    }

    // Password validation
    if (password.length < 6) {
        valid = false;
        messages.push("Password must be at least 6 characters.");
    }

    // Display feedback
    if (valid) {
        feedback.textContent = "Form submitted successfully! ✅";
        feedback.style.color = "green";
        form.reset();
    } else {
        feedback.textContent = messages.join(" ");
        feedback.style.color = "red";
    }
});
