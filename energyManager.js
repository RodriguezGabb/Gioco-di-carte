// Define fullness globally
window.fullness = 0;

// Function to update the bar based on the variable value
function updateBar() {
    const fill = document.getElementById('fill');
    const percentage = (window.fullness / 10) * 100; // da 0 a 10 ma standard è 5
    fill.style.width = percentage + '%';
}


updateBar();



function updManaBar(i){
    if(typeof i != 'number'){throw new exception("tempo variato con NaN")}
    window.fullness += i;    
}
function resetManaBar(){
    window.fullness=5;
}
