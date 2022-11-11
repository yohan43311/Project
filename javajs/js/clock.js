const clock = document.querySelector("h2#clock"); //or getElementById("clock") 

// clock.innerText = "dd"; // 동작 확인

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");;
    const seconds = String(date.getSeconds()).padStart(2,"0");;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() // 즉시호출 (if 없다면 00:00:00을 표시함)
setInterval(getClock,1000); // 10번 이후 매 초마다 getClock을 다시 실행