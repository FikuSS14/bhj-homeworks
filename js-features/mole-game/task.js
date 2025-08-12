const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = parseInt(deadCounter.textContent);
let lost = parseInt(lostCounter.textContent);

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);

    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;

            if (dead === 10) {
                alert('Победа! Вы убили 10 кротов!');
                resetGame();
            }
        } else {
            lost++;
            lostCounter.textContent = lost;

            if (lost === 5) {
                alert('Вы проиграли! 5 промахов...');
                resetGame()
            }
        }
    });
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}