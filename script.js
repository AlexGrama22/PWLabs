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
    ctaDiv.textContent = 'Get your free consultation';
    ctaDiv.addEventListener('click', () => {
        window.location.href = 'tel:+37369-833-910';
    });

    messageDiv.appendChild(ctaDiv);
    mascot.appendChild(messageDiv);
    messageDiv.style.display = 'none';
    let isHovering = false;

    mascot.addEventListener('mouseover', () => {
        isHovering = true;
        messageDiv.style.display = 'block';
    });

    mascot.addEventListener('mouseout', () => {
        isHovering = false;
        
        setTimeout(() => {
            if (!isHovering) {
                messageDiv.style.display = 'none';
            }
        }, 100); 
    });

    messageDiv.addEventListener('mouseover', () => {
        isHovering = true;
    });

    messageDiv.addEventListener('mouseout', () => {
        isHovering = false;
        setTimeout(() => {
            if (!isHovering) {
                messageDiv.style.display = 'none';
            }
        }, 100);
    });
});