// Define fullness globally
window.GoodManafullness = 0;
window.EvilManafullness = 0;
const evilManaNumber = document.getElementById("eviManaNumber");
const goodManaNumber = document.getElementById("goodManaNumber");
// Function to update the bar based on the variable value
function setGoodManaBar() {
    const fillGoodMana = document.getElementById('fillGoodMana');
    const GoodmanaPercentage = (window.GoodManafullness / 5) * 100; // da 0 a 10 ma standard è 5
    fillGoodMana.style.width = GoodmanaPercentage + '%';
}
function setEvilManaBar() {
    const fillEvilMana = document.getElementById('fillEvilMana');
    const EvilmanaPercentage = (window.EvilManafullness / 5) * 100; // da 0 a 10 ma standard è 5
    fillEvilMana.style.width = EvilmanaPercentage + '%';
}

function updGoodManaBar(i) {
    if (Number.isNaN(i)) { throw new Error("energia Good variata con NaN") }
    window.GoodManafullness += i;
    setGoodManaBar();
    updateGoodManaNumber(window.GoodManafullness);
}
function updEvilManaBar(i) {
    if (Number.isNaN(i)) { throw new Error("energia Evil variata con NaN") }
    window.EvilManafullness += i;
    setEvilManaBar();
    updateEvilManaNumber(window.EvilManafullness);
}
function resetGoodManaBar() {
    window.GoodManafullness = 5;
    setGoodManaBar();
    updateGoodManaNumber(window.GoodManafullness);
}
function resetEvilManaBar() {
    window.EvilManafullness = 5;
    setEvilManaBar();
    updateEvilManaNumber(window.EvilManafullness);
}

function updateEvilManaNumber(number) {
    evilManaNumber.textContent = number; // Update the text content of the number div
}
function updateGoodManaNumber(number) {
    goodManaNumber.textContent = number; // Update the text content of the number div
}
resetGoodManaBar();
resetEvilManaBar();