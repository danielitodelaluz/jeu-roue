// script.js
const actions = ['Oui', 'Non'];

function createWheel() {
    const wheel = document.getElementById('wheel');
    const numberOfSegments = actions.length;
    const segmentAngle = 360 / numberOfSegments;

    for (let i = 0; i < numberOfSegments; i++) {
        const segment = document.createElement('div');
        segment.className = 'segment';
        segment.style.transform = `rotate(${i * segmentAngle}deg)`;
        wheel.appendChild(segment);
    }
}

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Ensure at least 2 full rotations
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        const selectedIndex = Math.floor(((randomDegree % 360) / 360) * actions.length);
        alert(`Action: ${actions[selectedIndex]}`);
    }, 4000);
}

document.getElementById('spin').addEventListener('click', spinWheel);

createWheel();
