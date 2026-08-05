
const today = new Date();
const CurrentYear = today.getFullYear();

document.getElementById("currentyear").innerHTML = CurrentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

function trackReviewSubmission() {
    
    let numReviews = Number(window.localStorage.getItem("reviewCount")) || 0;

    numReviews++;
    
    window.localStorage.setItem("reviewCount", numReviews);
    
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }
}


trackReviewSubmission();