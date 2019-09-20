function handleScroll(event) {
    var move = document.querySelector('.background');
    var colorred = document.querySelector('.main__red');
    var colorblue = document.querySelector('.main__blue');

    colorred.style.opacity = window.scrollY / 1000;
    colorblue.style.opacity = window.scrollX / 1000;

}

window.addEventListener('scroll', handleScroll);