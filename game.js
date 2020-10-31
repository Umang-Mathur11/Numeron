var number1 = Math.round(Math.random()*100)
var number1box = document.getElementById("number1")
number1box.innerHTML = number1

var number2 = Math.round(Math.random()*100)
var number2box = document.getElementById("number2")
number2box.innerHTML = number2

var greaterThan=document.getElementById("greater-than")
var score = 0;

greaterThan.onclick=()=>{
    if(number1 > number2){
        score++;  
    }
    else{
        location.href = "./gameover.html?score="+score
    }   
    number1 = Math.round(Math.random()*100)
    number2 =Math.round(Math.random()*100)
    number1box.innerHTML = number1
    number2box.innerHTML = number2
}

var lesserThan = document.getElementById("lesser-than")
var score = 0;

lesserThan.onclick=()=>{
    if(number1 > number2){
        score++;  
    }
    else{
        location.href = "./gameover.html?score="+score
    }   
    number1 = Math.round(Math.random()*100)
    number2 =Math.round(Math.random()*100)
    number1box.innerHTML = number1
    number2box.innerHTML = number2}

    var equalTo = document.getElementById("equal-to")
var score = 0;

equalTo.onclick=()=>{
    if(number1 == number2){
        score++;  
    }
    else{
        location.href = "./gameover.html?score="+score
    }   
    number1 = Math.round(Math.random()*100)
    number2 =Math.round(Math.random()*100)
    number1box.innerHTML = number1
    number2box.innerHTML = number2}

    var time = 5;
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();
