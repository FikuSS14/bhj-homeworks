function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

function checkRevealElements() {
    const revealElements = document.querySelectorAll('.reveal:not(.reveal_active)');
    
    revealElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('reveal_active');
        }
    });
}

document.addEventListener('DOMContentLoaded', checkRevealElements);
window.addEventListener('scroll', checkRevealElements);
window.addEventListener('resize', checkRevealElements);
