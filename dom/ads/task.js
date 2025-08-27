document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;
        
        function rotateCase() {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');
            const speed = cases[currentIndex].getAttribute('data-speed') || 1000;
            const color = cases[currentIndex].getAttribute('data-color') || 'black';
            cases[currentIndex].style.color = color;
            
            clearInterval(rotator.intervalId);
            rotator.intervalId = setInterval(rotateCase, parseInt(speed));
        }
        
        const initialSpeed = cases[0].getAttribute('data-speed') || 1000;
        const initialColor = cases[0].getAttribute('data-color') || 'black';
        cases[0].style.color = initialColor;
        
        rotator.intervalId = setInterval(rotateCase, parseInt(initialSpeed));
    });
});
