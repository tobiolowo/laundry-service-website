// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const openModal = document.getElementById('openPremiumModal');
    const closeModal = document.getElementById('closePremiumModal');
    const modal = document.getElementById('premiumModal');

    if (openModal && closeModal && modal) {
    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
});

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
});

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("user");
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (user && isLoggedIn === "true") {
        let userData = JSON.parse(user);
        document.getElementById("welcome-message").innerText = "Welcome, " + userData.name + "!";
        document.getElementById("auth-links").innerHTML = '<a href="#" onclick="logout()">Logout</a>';
    }
});

function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("You have logged out.");
    window.location.href = "login.html"; // Redirect to login page
}

document.addEventListener("DOMContentLoaded", function () {
let user = localStorage.getItem("user");
let isLoggedIn = localStorage.getItem("isLoggedIn");
let authLinks = document.getElementById("auth-links");
let welcomeMessage = document.getElementById("welcome-message");

if (user && isLoggedIn === "true") {
let userData = JSON.parse(user);
welcomeMessage.innerText = "Welcome, " + userData.name + "!";
authLinks.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
}
});

function logout() {
localStorage.removeItem("isLoggedIn");
alert("You have logged out.");
window.location.href = "login.html"; // Redirect to login page
}
document.addEventListener("DOMContentLoaded", function () {
    const reviewList = document.getElementById("review-list");
    const reviewText = document.getElementById("review-text");
    const submitReview = document.getElementById("submit-review");

    // Load existing reviews
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    function displayReviews() {
        reviewList.innerHTML = "";
        reviews.forEach(review => {
            let li = document.createElement("li");
            li.textContent = review;
            reviewList.appendChild(li);
        });
    }

    submitReview.addEventListener("click", function () {
        let newReview = reviewText.value.trim();
        if (newReview) {
            reviews.push(newReview);
            localStorage.setItem("reviews", JSON.stringify(reviews));
            reviewText.value = "";
            displayReviews();
        } else {
            alert("Please write something before submitting.");
        }
    });

    displayReviews();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("check-availability").addEventListener("click", function () {
        // List of hostels where the service is available
        let availableHostels = [
            "Queen Esther Hostel", "Main girl's hostel", "Main boy's hostel",
            "Queen Esther", "Prophet Moses", "Prophet Moses Hostel",
            "Engineering Hostel", "Health Center girls' Hostel"
        ];

        // Convert all hostel names to lowercase for comparison
        let availableHostelsLower = availableHostels.map(hostel => hostel.toLowerCase());

        // Get and normalize user input
        let userHostel = document.getElementById("hostel-input").value.trim().toLowerCase();

        let resultText = document.getElementById("availability-result");

        if (userHostel === "") {
            resultText.textContent = "Please enter your hostel name.";
            resultText.style.color = "#D9534F"; // Red for error
            return;
        }

        if (availableHostelsLower.includes(userHostel)) {
            // Find original case version of the hostel name
            let originalName = availableHostels[availableHostelsLower.indexOf(userHostel)];
            resultText.textContent = `Yes! We operate in ${originalName}. 🎉`;
            resultText.style.color = "#346751"; // Dark Green for success
        } else {
            resultText.textContent = `Sorry, we are not available in ${document.getElementById("hostel-input").value.trim()} yet. 😢`;
            resultText.style.color = "#D9534F"; // Red for not available
        }
    });
});


