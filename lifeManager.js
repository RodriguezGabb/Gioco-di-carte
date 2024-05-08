// Define fullness globally
window.GoodLifeFullness = 0;
window.EvilLifeFullness = 0;
window.GoodarmourFullness = 0;
window.EvilarmourFullness = 0;

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
            window.GoodarmourFullness += i;
            setGoodarmourBar();
            return 0;
        }
        let temp = i - window.GoodarmourFullness;
        window.GoodarmourFullness = 0;
        setGoodarmourBar();
        return temp;//cosi sappiamo danno extra da infliggere
    }
    //se armatura
    window.GoodarmourFullness += i;
    setGoodarmourBar();
    return 0;
}
function updEvilArmour(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0) {//se danno, è numero positivo!!!!
        if (i <= window.EvilarmourFullness) {//danno<=armatura
            window.EvilarmourFullness = window.EvilarmourFullness - i;
            setEvilarmourBar();
            return 0;
        }
        let temp = i - window.EvilarmourFullness;
        window.EvilarmourFullness = 0;
        setEvilarmourBar();
        return temp;//cosi sappiamo danno extra da infliggere
    }
    //se è più armatura
    window.EvilarmourFullness += i;
    setEvilarmourBar();
    return 0;
}
function resetGoodArmour() {
    window.GoodarmourFullness = 0;
    setGoodarmourBar();
}
function resetEvilArmour() {
    window.EvilarmourFullness = 0;
    setEvilarmourBar();
}
function updGoodLifeBar(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0 && i > window.GoodLifeFullness) {
        alert("hai perso")
    }
    window.GoodLifeFullness += i;
    setGoodLifeBar();
}
function updEvilLifeBar(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0 && i > window.EvilLifeFullness) {
        alert("hai vinto")
    }
    window.EvilLifeFullness += i;
    setEvilLifeBar();
}
function resetGoodLifeBar() {
    window.GoodLifeFullness = 30;
    setGoodLifeBar();
}
function resetEvilLifeBar() {
    window.EvilLifeFullness = 30;
    setEvilLifeBar();
}
resetGoodLifeBar();
resetEvilLifeBar();