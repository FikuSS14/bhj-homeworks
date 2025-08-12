const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isBig = true;

cookie.addEventListener('click', () => {
    clickCount++;
    counter.textContent = clickCount;

    if (isBig) {
        cookie.width = 150;
        cookie.height = 150 * (cookie.naturalHeight / cookie.naturalWidth);
    } else {
        cookie.width = 200;
        cookie.height = 200 * (cookie.naturalHeight / cookie.naturalWidth);
    }

    isBig = !isBig;
});