document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        let user = {
            name: name,
            email: email,
            password: password
        };

        // Save user details to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created successfully! Redirecting to login page...");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        window.location.href = "index.html"; // Redirect to homepage
        }
});
