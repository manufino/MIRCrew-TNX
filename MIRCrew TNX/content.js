function createButton() {
    const button = document.createElement('button');
    button.innerText = 'Ringrazia';
    button.style.padding = '20px 40px';
    button.style.fontSize = '22px';
    button.style.backgroundColor = '#ffcc00';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.boxSizing = 'border-box';
    button.style.color = 'black';

    button.addEventListener('mouseover', () => {
        button.style.outline = '2px solid red';
        button.style.color = 'green';
    });

    button.addEventListener('mouseout', () => {
        button.style.outline = 'none';
        button.style.color = 'black';
    });

    button.addEventListener('click', () => {
        const scrollPosition = window.scrollY;
        localStorage.setItem('scrollPosition', scrollPosition);
        simulateLinkClick();
    });

    return button;
}

function checkForElements() {
    const targetElements = document.querySelectorAll('dl.hidebox.hi dd center');
    targetElements.forEach(targetElement => {
        if (targetElement.innerHTML.includes('Ringrazia il Releaser cliccando sul tasto')) {
            const button = createButton();
            targetElement.innerHTML = '';
            targetElement.appendChild(button);
        }
    });
}

function simulateLinkClick() {
    const link = document.querySelector('a[id^="lnk_thanks_post"]');
    if (link) {
        link.click();
    }
}

function restoreScrollPosition() {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        localStorage.removeItem('scrollPosition');
    }
}

window.addEventListener('load', () => {
    checkForElements();
    restoreScrollPosition();
});
