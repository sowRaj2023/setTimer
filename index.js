let counterEl = document.getElementById("counter");

let seconds = 0;
let errorMsge = "Your task completed";
let timerId;

function clearIntervalEl(){
    clearInterval(timerId)
}

function firstButton(){
    seconds = 10;
    clearIntervalEl();
    setTimer();

}

function secondButton(){
    seconds = 20;
    clearIntervalEl();
    setTimer();

}

function thirdButton(){
    seconds = 30;
    clearIntervalEl();
    setTimer();

}

function fourthButton(){
    seconds = 40;
    clearIntervalEl();
    setTimer();

}

function setTimer() {
     timerId = setInterval(function(){
        if(seconds>1){
            seconds = seconds -1
            counterEl.textContent = "seconds left" + seconds;
        }else{
            clearIntervalEl() ;
            counterEl.textContent  = errorMsge;
        }

    },1000)
}


