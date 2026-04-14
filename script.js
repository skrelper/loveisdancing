let input = document.getElementById('password');
let star = document.querySelector('.star');
star.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
        star.textContent = '⏹';
    } else {
        input.type = 'password';
        star.textContent = '❤';
    }
})