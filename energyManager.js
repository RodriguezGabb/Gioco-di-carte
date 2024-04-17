// Define fullness globally
window.fullness = 0;

// Function to update the bar based on the variable value
function updateBar() {
    const fill = document.getElementById('fill');
    const percentage = (window.fullness / 10) * 100; // Assuming fullness ranges from 0 to 100
    fill.style.width = percentage + '%';
}

// Update the bar initially
updateBar();

// Example: increase the variable value every second
setInterval(() => {
    window.fullness += 1; // Increase fullness by 10 (adjust this value as needed)
    if (window.fullness > 10) window.fullness = 10; // Limit the value to 100
    updateBar();
}, 1000);
