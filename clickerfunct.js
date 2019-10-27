var clicks = 0; 
var timer = 0;
function timekeeper(){
    console.log('Hi Im worjing');
    document.getElementById("time").innerHTML = timer;
}

function clickME() {
    clicks += 1;
    timer = 10;
    document.getElementById("clicks").innerHTML = clicks;
    while(timer > 0){
        setTimeout(dec(),100000);
    }
}

function dec(){
        timer=timer-1;
        console.log(timer);
        sleep(1000);       
        timekeeper();
}

//window.addEventListener('load', timekeeper);
