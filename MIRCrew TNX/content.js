// Funzione per creare il pulsante
function createButton() {
    const button = document.createElement('button');
    button.innerText = 'Ringrazia';
    button.style.padding = '20px 40px'; // Aumenta le dimensioni del pulsante
    button.style.fontSize = '22px'; // Aumenta la dimensione del testo
    button.style.backgroundColor = '#ffcc00';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.boxSizing = 'border-box'; // Assicura che il bordo sia interno
    button.style.color = 'black'; // Testo nero di default

    // Aggiungi un effetto hover
    button.addEventListener('mouseover', () => {
        button.style.outline = '2px solid red';
        button.style.color = 'green';
    });

    // Rimuovi l'effetto hover quando il mouse esce dal pulsante
    button.addEventListener('mouseout', () => {
        button.style.outline = 'none';
        button.style.color = 'black';
    });

    // Aggiungi un'azione al pulsante
    button.addEventListener('click', () => {
        // Memorizza la posizione dello scroll
        scrollPosition = window.scrollY;
        localStorage.setItem('scrollPosition', scrollPosition);
        simulateLinkClick();
    });

    return button;
}

// Verifica la presenza degli elementi specificati e li sostituisce
function checkForElements() {
    const targetElements = document.querySelectorAll('dl.hidebox.hi dd center');
    targetElements.forEach(targetElement => {
        if (targetElement.innerHTML.includes('Ringrazia il Releaser cliccando sul tasto')) {
            const button = createButton();
            targetElement.innerHTML = ''; // Sostituisce il contenuto dell'elemento target
            targetElement.appendChild(button);
        }
    });
}

// Funzione per simulare il clic su un link
function simulateLinkClick() {
    const link = document.querySelector('a[id^="lnk_thanks_post"]');
    if (link) {
        link.click();
    }
}

// Ripristina la posizione dello scroll
function restoreScrollPosition() {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
    }
}

// Assicura che lo script venga eseguito dopo il caricamento completo della pagina
window.addEventListener('load', () => {
    checkForElements();
    restoreScrollPosition();
});
