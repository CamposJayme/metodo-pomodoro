//
const btnOptions = document.querySelectorAll('.buttons-options button');
const btnStartPauseTimer = document.querySelector('#timer-count');

btnOptions.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        activeBtn(index);
    });
});

function activeBtn(index) {
    btnOptions.forEach(btn => {
        btn.classList.remove('active');
    })
    btnOptions[index].classList.add('active')
}


//
btnStartPauseTimer.addEventListener('click', () => {
    btnStartPauseTimer.classList.toggle('active')
    startPauseCounting();
})

let contagemEmSegundos = 5;
let intervalId = null;


const contagemRegressiva = () => {
    if (contagemEmSegundos <= 0) {
        stopCounting()
        return;
    }
    console.log(contagemEmSegundos);
    contagemEmSegundos -= 1;
}

function startPauseCounting() {
    if (intervalId) {
        stopCounting();
        return;
    }
    intervalId = setInterval(contagemRegressiva, 1000);
}

function stopCounting() {
    clearInterval(intervalId);
    intervalId = null;
}