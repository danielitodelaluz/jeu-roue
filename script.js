// script.js
const actions = ['Boire 1 gorgée', 'Donner 2 gorgées', 'Boire 3 gorgées', 'Inventer une règle', 'Passer son tour', 'Choisir un joueur pour boire'];

function createWheel() {
    const wheel = document.getElementById('wheel');
    const numberOfSegments = actions.length;
    const segmentAngle = 360 / numberOfSegments;

    for (let i = 0; i < numberOfSegments; i++) {
        const segment = document.createElement('div');
        segment.className = 'segment';
        segment.style.transform = `rotate(${i * segmentAngle}deg) skewY(-${90 - segmentAngle}deg)`;
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
