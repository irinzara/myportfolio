document.addEventListener("DOMContentLoaded", function () {
    let messages = document.querySelectorAll(".hello-text span");
    let index = 0;
    
    function showNextMessage() {
        if (index > 0) {
            messages[index - 1].style.display = "none"; // Hide previous
        }
        if (index < messages.length) {
            messages[index].style.display = "inline-block"; // Show current
            index++;
            setTimeout(showNextMessage, 90); // Faster transition (0.3s)
        } else {
            // Redirect immediately after last message
            window.location.href = "home.html"; 
        }
    }

    showNextMessage(); // Start preloader sequence
});
