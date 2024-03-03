document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const mascot = document.getElementById('mascot');
        mascot.style.opacity = 1;
    }, 5000); // 5-second delay

    const mascot = document.getElementById('mascot');
    mascot.addEventListener('mouseover', () => {
        alert('Welcome! How can we help you with your construction needs?');
    });
});