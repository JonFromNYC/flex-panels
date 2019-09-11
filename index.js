function toggleOpen() {
    this.classList.toggle('open');
};

function toggleActive(e){
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
};

const panels = document.querySelectorAll('.panel');

//Listen for a click on a panel
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
