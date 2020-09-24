const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimaton();

function breathAnimaton () {
    text.innerHTML = 'Merr Fryme'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Mbaje Frymen'

        setTimeout(() => {
            text.innerText = 'Qitsouuuuuuu'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimaton, totalTime);