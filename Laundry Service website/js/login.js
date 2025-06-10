document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem("user");

    if (storedUser) {
        let user = JSON.parse(storedUser);

        if (email === user.email && password === user.password) {
            alert("Login successful! Redirecting to homepage...");

            // Save login status
            localStorage.setItem("isLoggedIn", "true");

            // ✅ Redirect to actual homepage
            window.location.href = "/index.html"; // Adjust this path based on where your homepage really is
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
});
