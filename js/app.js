//This is the code I found it in google but I couldn't reach the solution


const isHover = e => e.parentElement.querySelector(':hover') === e;

const myDiv = document.getElementById('card');
const hover = document.getElementById('card-link')
document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(myDiv);
    if (hovered === checkHover.hovered) {
        console.log(hovered ? 'hovered' : 'not hovered');
        hover.classList.remove('card-link');
        hover.classList.add('cad-hover');
    } else {

    }
});