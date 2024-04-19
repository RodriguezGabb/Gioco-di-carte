// Define fullness globally
window.fullness = 0;

// Function to update the bar based on the variable value
function updateBar() {
    const fill = document.getElementById('fill');
    const percentage = (window.fullness / 10) * 100; // Assuming fullness ranges from 0 to 10
    fill.style.width = percentage + '%';
}

// Update the bar initially
updateBar();

/*/Example: increase the variable value every second
setInterval(() => {
    window.fullness += 1; // incremento della barra
    if (window.fullness > 10) window.fullness = 10; // upper limit
    updateBar();
}, 1000);//1000 è intervallo tra ripetizioni di questo programma*/

function fluctuation(i){
    if(typeof i != 'number'){throw new exception("tempo variato con NaN")}
    window.fullness += i    
}
