const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const loginContainer = document.getElementById('loginContainer');
const signupContainer = document.getElementById('signupContainer');

// Show sign-up form and hide login form
signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

// Show login form and hide sign-up form
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});
// logscript.js

// Function to check login status (placeholder function)
function checkLoginStatus() {
    // Here you should implement the logic to check if the user is logged in.
    // For demonstration, we'll just redirect to the login page.
    // You may replace this with actual login status checking.

    // Redirect to login page if not logged in
    window.location.href = 'auth/logins.html';
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);
