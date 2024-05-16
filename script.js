const firstPhase = document.querySelector('.first-phase');
let isMoved = false;

document.getElementById('check').addEventListener('click', () => {
    if (!isMoved) {
        firstPhase.style.marginTop = '100%';
    } else {
        firstPhase.style.marginTop = '20px';
    }
    
    isMoved = !isMoved;
});

const navbar = document.getElementById("navbar");

document.getElementById('check').addEventListener('click', () => {
    navbar.style.backgroundColor = "red";
})
