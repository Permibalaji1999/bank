// Get reference to the login form
const loginForm = document.getElementById("login-form");

// Add event listener for form submission
loginForm.addEventListener("submit", handleLogin);

// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    // Perform login logic here (validate credentials, etc.)
    if (loginEmail === "user@example.com" && loginPassword === "password") {
        // Redirect to the transaction page on successful login
        alert("Login successfull");
        loginForm.reset();
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
