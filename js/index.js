"use strict";

const btnInDiv = document.querySelector('div');

btnInDiv.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});