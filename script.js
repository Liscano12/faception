const selectSizeElement = document.getElementById("selectedSize");
const selectSizeElementMobile = document.getElementById("selectedSize_mobile");
const inputMail1 = document.getElementById("mail1");
const inputMail2 = document.getElementById("mail2");
const inputMail3 = document.getElementById("mail3");
const galerieElement_f = document.getElementById("galerieImage_f");
const galerieElement_b = document.getElementById("galerieImage_b");
const titleElementMobile = document.getElementById("title_mobile");
const titleElementDesktop = document.getElementById("title_desktop");
const discriptionElementMobile = document.getElementById("discription_mobile");
const discriptionElementDesktop = document.getElementById("discription_desktop");
const dragerWindow = document.getElementById("dragerWindow");
let currentClouth = "shirt";
let currentColor = "white";
let currentMuster = "muster1";
let currentSize = "m";
let card = [];

function changeDress(dress) {
    if (dress == "shirt") {
        currentClouth = "shirt"
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
    if (dress == "hoodie") {
        currentClouth = "hoodie"
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
}

function changeColor(color) {
    if (color == "white") {
        currentColor = "white";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
    if (color == "offwhite") {
        currentColor = "offwhite";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
    if (color == "lightgray") {
        currentColor = "lightgray";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
}

function changeMuster(muster) {
    if (muster == "muster1") {
        currentMuster = "muster1";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
    if (muster == "muster2") {
        currentMuster = "muster2";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
    if (muster == "muster3") {
        currentMuster = "muster3";
        changeGalerieImage(currentClouth, currentColor, currentMuster);
    }
}

function changeGalerieImage(art, color, muster) {
    imageString = "img/" + art + "/" + color + "/" + muster + "/" + art;
    galerieElement_f.src = imageString + "_f.png";
    galerieElement_b.src = imageString + "_b.png";
    if (art == "shirt") {
        titleElementMobile.innerText = "Unisex Shirt";
        titleElementDesktop.innerText = "Unisex Shirt";
    }
    if (art == "hoodie") {
        titleElementMobile.innerText = "Unisex Hoodie";
        titleElementDesktop.innerText = "Unisex Hoodie";
    }
    var colorString=color;
    if(color=="offwhite"){
        colorString= "off white";
    }
    if(color=="lightgray"){
        colorString= "light gray";
    }
    if(muster=="muster1"){
        discriptionElementMobile.innerText = "153.101 - "+colorString;
        discriptionElementDesktop.innerText = "153.101 - "+colorString;
    }else if(muster=="muster2"){
        discriptionElementMobile.innerText = "113.13 - "+colorString;
        discriptionElementDesktop.innerText = "113.13 - "+colorString;
    }else{
        discriptionElementMobile.innerText = "104.42 - "+colorString;
        discriptionElementDesktop.innerText = "104.42 - "+colorString;
    }
}

function changeSize(size) {
    selectSizeElement.innerText = "Size " + size;
    selectSizeElementMobile.innerText = "Size " + size;
    currentSize = size;
} 

/**
function addToCard() {
    //TODO add shirt to warenkorb.
    card.push({ currentClouth, currentSize, currentColor, currentMuster });
    card.forEach(e =>
        console.log(e)
    );
} */

/**
 * 
 * @param targetId element id where class should be toggeled
 * @param newClass new class which will be toggeled
 */
function toggleClass(targetId, newClass) {
    var element = document.getElementById(targetId);
    element.classList.toggle(newClass);
}

function sendMail(mail){
    if(mail=="mail1"){
        var mail =mail;
        inputMail1.value="";
        postMailToServer(mail);
    }
    if(mail=="mail2"){
        var mail =mail;
        inputMail2.value="";
        postMailToServer(mail);
    }
    if(mail=="mail3"){
        var mail =mail;
        inputMail3.value="";
        postMailToServer(mail);
    }
}