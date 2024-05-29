// Define fullness globally
window.GoodLifeFullness = 0;
window.EvilLifeFullness = 0;
window.GoodarmourFullness = 0;
window.EvilarmourFullness = 0;
const evilLifeNumber = document.getElementById("evilLifeNumber");
const goodLifeNumber = document.getElementById("goodLifeNumber");
const evilArmourNumber = document.getElementById("evilArmourNumber");
const goodArmourNumber = document.getElementById("goodArmourNumber");
//Numero turni 
var nTurni = 0;
function incrTurni() {
    nTurni += 1;
}
// Function to update the bar based on the variable value
function setGoodLifeBar() {
    const fillGoodLife = document.getElementById('fillGoodLife');
    const GoodlifePercentage = (window.GoodLifeFullness / 30) * 100; // da 0 a 10 ma standard è 30
    fillGoodLife.style.width = GoodlifePercentage + '%';
}
function setEvilLifeBar() {
    const fillEvilLife = document.getElementById('fillEvilLife');
    const EvillifePercentage = (window.EvilLifeFullness / 30) * 100; // da 0 a 10 ma standard è 30
    fillEvilLife.style.width = EvillifePercentage + '%';
}
function setGoodarmourBar() {
    const fillGoodarmour = document.getElementById('fillGoodarmour');
    const GoodarmourPercentage = (window.GoodarmourFullness / 30) * 100; // da 0 a 10 ma standard è 30
    fillGoodarmour.style.width = GoodarmourPercentage + '%';
}
function setEvilarmourBar() {
    const fillEvilarmour = document.getElementById('fillEvilarmour');
    const EvilarmourPercentage = (window.EvilarmourFullness / 30) * 100; // da 0 a 10 ma standard è 30
    fillEvilarmour.style.width = EvilarmourPercentage + '%';
}

function updGoodArmour(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0) {//se danno
        if (i <= window.GoodarmourFullness) {//danno<=armatura
            window.GoodarmourFullness = window.GoodarmourFullness + i;
            setGoodarmourBar();
            updateGoodArmourNumber(window.GoodarmourFullness);
            return 0;
        }
        let temp = i - window.GoodarmourFullness;
        window.GoodarmourFullness = 0;
        setGoodarmourBar();
        updateGoodArmourNumber(window.GoodarmourFullness);
        return temp;//cosi sappiamo danno extra da infliggere
    }
    //se armatura
    window.GoodarmourFullness += i;
    setGoodarmourBar();
    updateGoodArmourNumber(window.GoodarmourFullness);
    return 0;
}
function updEvilArmour(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0) {//se danno
        if (i <= window.EvilarmourFullness) {//danno<=armatura
            window.EvilarmourFullness = window.EvilarmourFullness + i;
            setEvilarmourBar();
            updateEvilArmourNumber(window.EvilarmourFullness);
            return 0;
        }
        let temp = i - window.EvilarmourFullness;
        window.EvilarmourFullness = 0;
        setEvilarmourBar();
        updateEvilArmourNumber(window.EvilarmourFullness);
        return temp;//cosi sappiamo danno extra da infliggere
    }
    //se è più armatura
    window.EvilarmourFullness += i;
    setEvilarmourBar();
    updateEvilArmourNumber(window.EvilarmourFullness);
    return 0;
}
function resetGoodArmour() {
    window.GoodarmourFullness = 0;
    setGoodarmourBar();
    updateGoodArmourNumber(0);
}
function resetEvilArmour() {
    window.EvilarmourFullness = 0;
    setEvilarmourBar();
    updateEvilArmourNumber(0);
}
function updGoodLifeBar(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i <= 0 && i >= window.GoodLifeFullness) {
        window.GoodLifeFullness += i;
        setGoodLifeBar();
        updateGoodLifeNumber(window.GoodLifeFullness);
        alert("hai perso");
    }
    window.GoodLifeFullness += i;
    setGoodLifeBar();
    updateGoodLifeNumber(window.GoodLifeFullness);
}
function updEvilLifeBar(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i <= 0 && i >= window.EvilLifeFullness) {
        window.EvilLifeFullness += i;
        setEvilLifeBar();
        updateEvilLifeNumber(window.EvilLifeFullness);
        localStorage.setItem("nTurni", nTurni);
        alert("hai vinto");

    }
    window.EvilLifeFullness += i;
    setEvilLifeBar();
    updateEvilLifeNumber(window.EvilLifeFullness);
}
function resetGoodLifeBar() {
    window.GoodLifeFullness = 30;
    setGoodLifeBar();
    updateGoodLifeNumber(30);
}
function resetEvilLifeBar() {
    window.EvilLifeFullness = 30;
    setEvilLifeBar();
    updateEvilLifeNumber(30);
}
function updateEvilLifeNumber(number) {
    evilLifeNumber.textContent = number; // Update the text content of the number div
}
function updateGoodLifeNumber(number) {
    goodLifeNumber.textContent = number; // Update the text content of the number div
}
function updateEvilArmourNumber(number) {
    evilArmourNumber.textContent = number; // Update the text content of the number div
}
function updateGoodArmourNumber(number) {
    goodArmourNumber.textContent = number; // Update the text content of the number div
}
resetGoodLifeBar();
resetEvilLifeBar();