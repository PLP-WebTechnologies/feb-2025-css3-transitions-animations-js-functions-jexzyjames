// Load username from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("username").textContent = savedName;
    }
});

// Function to save username in localStorage
function saveUserName() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
        localStorage.setItem("username", nameInput);
        document.getElementById("username").textContent = nameInput;
        alert("Name saved!");
    } else {
        alert("Please enter a name.");
    }
}

// Function to trigger animation
function triggerAnimation() {
    const box = document.getElementById("animatedBox");
    
    // Remove and re-add the class to restart the animation
    box.classList.remove("animate");
    void box.offsetWidth; // Forces reflow
    box.classList.add("animate");
}
