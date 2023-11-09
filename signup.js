// Get reference to the signup form
const signupForm = document.getElementById("signup-form");

// Add event listener for form submission
signupForm.addEventListener("submit", validateSignupForm);

// Function to validate the signup form
function validateSignupForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if username is empty
    if (username.trim() === "") {
        alert("Username is required");
        return;
    }

    // Check if email is empty or not valid
    if (email.trim() === "") {
        alert("Email is required");
        return;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Check if password is empty or too short
    if (password.trim() === "") {
        alert("Password is required");
        return;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // If all validations pass, you can proceed with signup logic
    alert("Signup successful!");
    signupForm.reset();
}

// Function to validate email format using a basic regular expression
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

