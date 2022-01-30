
var soma = document.getElementById("somar");
var subtrair = document.getElementById("subtrair")
var currentNumberWrapeer = document.getElementById("currentNumber");
var currentNumber=0



soma.addEventListener("click", function() {
    currentNumber=currentNumber+1;
    currentNumberWrapeer.innerHTML=currentNumber
    if (currentNumber>-1) {
        currentNumberWrapeer.style.color = 'black';
    }
    if (currentNumber>9) {
        currentNumber=9;
    }
}, false)

subtrair.addEventListener("click", function() {
    currentNumber=currentNumber-1;
    currentNumberWrapeer.innerHTML=currentNumber
    if (currentNumber<0) {
        currentNumberWrapeer.style.color = 'red';
    }
    if (currentNumber<-9) {
        currentNumber=-9;
    }
}, false)
