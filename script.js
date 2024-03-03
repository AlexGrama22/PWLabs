// document.addEventListener('DOMContentLoaded', (event) => {
//     setTimeout(() => {
//         const mascot = document.getElementById('mascot');
//         mascot.style.animationPlayState = 'running'; 
//     }, 5000); 

//     const mascot = document.getElementById('mascot');
//     mascot.addEventListener('mouseover', () => {
//         alert('Welcome to XYX Construct! We are happy to help you. If you need assistance, call us at: +37369833910');
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const mascot = document.getElementById('mascot');
    mascot.style.animation = `slideIn 2s ease-out 5s forwards, moveLeftRight 2s ease-in-out infinite alternate 7s`;
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('mascot-message');
    messageDiv.innerHTML = 'Welcome to XYX Construct! We are happy to help you. If you need assistance,';

    const ctaDiv = document.createElement('div');
    ctaDiv.classList.add('mascot-cta');
    ctaDiv.textContent = 'Call us: +37369-833-910';
    ctaDiv.addEventListener('click', () => {
        window.location.href = 'tel:+37369-833-910';
    });

    messageDiv.appendChild(ctaDiv);

    mascot.addEventListener('mouseover', () => {
        mascot.appendChild(messageDiv); 
        messageDiv.style.display = 'block';
    });

    mascot.addEventListener('mouseout', () => {
        messageDiv.style.display = 'none'; 
        mascot.removeChild(messageDiv); 
    });
});
