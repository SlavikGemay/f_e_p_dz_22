"use strict";

const btnText = document.querySelector('div');

btnText.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});