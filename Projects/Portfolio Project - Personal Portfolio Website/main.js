// let heading = document.querySelector('h1');
// heading.addEventListener('click', function (event) {
//     event.target.style.backgroundColor = 'black';
// })

let websiteTrigger = document.querySelector('.website-trigger');
let websiteInfo = document.querySelector('.website-info');
websiteTrigger.addEventListener('click', function (event) {
    if (websiteInfo.style.display === 'block') {
        websiteInfo.style.display = 'none';
    } else {
        websiteInfo.style.display = 'block';
    }

})

let pomodoroTrigger = document.querySelector('.pomodoro-trigger');
let pomodoroInfo = document.querySelector('.pomodoro-info');
pomodoroTrigger.addEventListener('click', function (event) {
    if (pomodoroInfo.style.display === 'block') {
        pomodoroInfo.style.display = 'none';
    } else {
        pomodoroInfo.style.display = 'block';
    }

})

let androidTrigger = document.querySelector('.android-trigger');
let androidInfo = document.querySelector('.android-info');
androidTrigger.addEventListener('click', function (event) {
    if (androidInfo.style.display === 'block') {
        androidInfo.style.display = 'none';
    } else {
        androidInfo.style.display = 'block';
    }

})

let algoTrigger = document.querySelector('.algo-trigger');
let algoInfo = document.querySelector('.algo-info');
algoTrigger.addEventListener('click', function (event) {
    if (algoInfo.style.display === 'block') {
        algoInfo.style.display = 'none';
    } else {
        algoInfo.style.display = 'block';
    }

})