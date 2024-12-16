const btnOptions = document.querySelectorAll('.buttons-options button');

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