let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값을 설정합니다.

// 각 변수 별로 html에서 element를 가져오는 코드를 작성하세요 (*변수명을 수정하지 말아주세요)
const millisec = document.querySelector("#millisec");
const second = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let time = 0;

startBtn.addEventListener('click', () => {
    clearInterval(time);
    time = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    ms++;

    millisec.innerHTML = ms;
    if (ms < 10) {
        millisec.innerHTML = "0" + ms;
    }
    if (ms > 99) {
        sec++;
        ms = 0;
    }

    second.innerHTML = sec;
    if (sec < 10) {
        second.innerHTML = "0" + sec;
    }
    if (sec > 99) {
        min++;
        sec = 0;
    }

    minutes.innerHTML = min;
    if (min < 10) {
        minutes.innerHTML = "0" + min;
    }
    if (min == 60) {
        clearInterval(time);
        console.log('나 더 이상은 못 세!');
    }

}
function stopTimer() {
    clearInterval(time);
}

function resetTimer() {
    clearInterval(time);
    ms = 0;
    sec = 0;
    min = 0;
    millisec.innerHTML = "00";
    second.innerHTML = "00";
    minutes.innerHTML = "00";
}