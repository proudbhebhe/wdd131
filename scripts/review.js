// 1. Footer Date Logic (Copied from your form.js so the footer still works)
const today = new Date();
const CurrentYear = today.getFullYear();

document.getElementById("currentyear").innerHTML = CurrentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

// 2. LocalStorage Review Counter Logic
function trackReviewSubmission() {
    // Get the current count from localStorage. If it doesn't exist, default to 0.
    let numReviews = Number(window.localStorage.getItem("reviewCount")) || 0;
    
    // Increment the counter by 1 because a new review was just submitted
    numReviews++;
    
    // Save the new, updated count back to localStorage
    window.localStorage.setItem("reviewCount", numReviews);
    
    // Display the new count on the HTML page
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }
}

// Run the counter function as soon as the page loads
trackReviewSubmission();