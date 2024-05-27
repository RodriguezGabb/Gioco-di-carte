// inizializzazioni
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
// aggiorna le barre
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

    if (i < 0) {//se player riceve danno

        if (-i <= window.GoodarmourFullness) {//danno<=armatura bloccato
            window.GoodarmourFullness = window.GoodarmourFullness + i;
            setGoodarmourBar();
            updateGoodArmourNumber(window.GoodarmourFullness);
            return 0;
        }
        console.log(i);
        let temp = i + window.GoodarmourFullness;
        window.GoodarmourFullness = 0;
        console.log(temp);
        setGoodarmourBar();
        updateGoodArmourNumber(window.GoodarmourFullness);
        return temp;//temp è il danno extra che viene inflitto
    }
    //se riceve armatura
    window.GoodarmourFullness += i;
    setGoodarmourBar();
    updateGoodArmourNumber(window.GoodarmourFullness);
    return 0;
}
function updEvilArmour(i) {
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    if (i < 0) {//se avversario riceve danno
        if (-i <= window.EvilarmourFullness) {//danno<=armatura bloccato
            window.EvilarmourFullness = window.EvilarmourFullness + i;
            setEvilarmourBar();
            updateEvilArmourNumber(window.EvilarmourFullness);
            return 0;
        }
        let temp = i + window.EvilarmourFullness;
        window.EvilarmourFullness = 0;
        setEvilarmourBar();
        updateEvilArmourNumber(window.EvilarmourFullness);
        return temp;//te,p è danno extra che viene inflitto
    }
    //se riceve armatura
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
function updGoodLifeBar(i) {//aggiorna vita e barra vita player
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    window.GoodLifeFullness += i;
    setGoodLifeBar();
    updateGoodLifeNumber(window.GoodLifeFullness);
    if (window.GoodLifeFullness <= 0) {
        document.getElementById("sconfitta").style.display = "block";
        document.getElementById("layer_nero").style.display = "block"
    }
}
function updEvilLifeBar(i) {//aggiorna vita e barra vita avversario
    if (Number.isNaN(i)) { throw new Error("life variata con NaN") }
    window.EvilLifeFullness += i;
    setEvilLifeBar();
    updateEvilLifeNumber(window.EvilLifeFullness);
    if (window.EvilLifeFullness <= 0) {
        localStorage.setItem("nTurni", nTurni);
        document.getElementById("vittoria").style.display = "block";
        document.getElementById("layer_nero").style.display = "block"
    }
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
function updateEvilLifeNumber(numero) {
    evilLifeNumber.textContent = numero; // aggiorna div
}
function updateGoodLifeNumber(numero) {
    goodLifeNumber.textContent = numero; // aggiorna div
}
function updateEvilArmourNumber(numero) {
    evilArmourNumber.textContent = numero; // aggiorna div
}
function updateGoodArmourNumber(numero) {
    goodArmourNumber.textContent = numero; // aggiorna div
}
resetGoodLifeBar();
resetEvilLifeBar();