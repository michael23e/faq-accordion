const accordionButtons = document.getElementsByClassName('accordion-btn');
const accordionTexts = document.getElementsByClassName('accordion-content');
const moreBtns = document.querySelectorAll('#more');

let cambiadores = Array.from({ length: accordionButtons.length }).fill(0);

for (const [index, accordionText] of Object.entries(accordionTexts)) {
    const accordionBtn = document.getElementById(`accordion-btn-${parseInt(index) + 1}`);
    const moreBtn = moreBtns[index];

    accordionBtn.addEventListener('click', () => {
        accordionText.classList.toggle('hidden');

        moreBtns[index].src = cambiadores[index] === 0 ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';

        cambiadores[index] = 1 - cambiadores[index];
    });
}

