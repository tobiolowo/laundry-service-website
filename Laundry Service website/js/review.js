document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const reviewText = document.getElementById("review-text");
    const submitReview = document.getElementById("submit-review");
    const reviewList = document.getElementById("review-list");

    let selectedRating = 0;

    // Handle star selection
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            if (selectedRating === index + 1) {
                // If the clicked star is already selected, reset the selection
                selectedRating = 0;
            } else {
                // Set new rating
                selectedRating = index + 1;
            }

            // Update the UI
            updateStarSelection();
        });
    });

    function updateStarSelection() {
        stars.forEach((s, i) => {
            s.classList.toggle("selected", i < selectedRating);
            s.style.color = i < selectedRating ? "#FFD700" : "gray"; // Gold when selected
        });
    }

    // Load existing reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    function displayReviews() {
        reviewList.innerHTML = "";
        reviews.forEach(review => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${"⭐".repeat(review.rating)}</strong> - ${review.text}`;
            reviewList.appendChild(li);
        });
    }

    submitReview.addEventListener("click", function () {
        let newReview = reviewText.value.trim();
        if (newReview && selectedRating > 0) {
            reviews.push({ rating: selectedRating, text: newReview });
            localStorage.setItem("reviews", JSON.stringify(reviews));
            reviewText.value = "";
            selectedRating = 0;
            updateStarSelection();
            displayReviews();
        } else {
            alert("Please select a rating and write a review.");
        }
    });

    displayReviews();
});


