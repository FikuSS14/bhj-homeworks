const span = document.getElementById('timer');

const interval = setInterval(() => {
    const currentValue = Number(span.textContent);
    
    if (currentValue > 0) {
        span.textContent = currentValue - 1;
    } else {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    } 
}, 1000);