"use strict";

const btnsInDiv = document.querySelector('div');

btnsInDiv.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});