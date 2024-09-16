
        const postTab = document.getElementById('postTab');
        const novelTab = document.getElementById('novelTab');
        const postContent = document.getElementById('postContent');
        const novelContent = document.getElementById('novelContent');
        const postSidebar = document.getElementById('postSidebar');
        const novelSidebar = document.getElementById('novelSidebar');

        postTab.addEventListener('click', () => {
            postTab.classList.add('active');
            novelTab.classList.remove('active');
            postContent.style.display = 'block';
            novelContent.style.display = 'none';
            postSidebar.style.display = 'flex';
            novelSidebar.style.display = 'none';
        });

        novelTab.addEventListener('click', () => {
            novelTab.classList.add('active');
            postTab.classList.remove('active');
            postContent.style.display = 'none';
            novelContent.style.display = 'block';
            postSidebar.style.display = 'none';
            novelSidebar.style.display = 'flex';
        });
// logscript.js

// Function to check login status (placeholder function)
function checkLoginStatus() {
    // Here you should implement the logic to check if the user is logged in.
    // For demonstration, we'll just redirect to the login page.
    // You may replace this with actual login status checking.

    // Redirect to login page if not logged in
    window.location.href = 'auth/login.html';
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', checkLoginStatus);
