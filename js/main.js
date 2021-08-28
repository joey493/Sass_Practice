// Drop menu
const barIcon = document.querySelector('.hamburger');
const dropMenu = document.querySelector('.hamburger ul');

const showDropMenu = (button, dropMenu) => {    

    // toggle dropMenu when click
    button.onclick = () => {
        dropMenu.classList.toggle('display');
    };

}

showDropMenu(barIcon, dropMenu);

// scroll to top function
const body = document.querySelector('body');
const scrollButton = document.querySelector('.scroll-to-top');

const scrollToTop  = (button, element) => {
    element.onscroll = () => {
        if (element.pageYOffset >= 600) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    }
    
    button.addEventListener('click', () => {
        element.scrollTo(0, 0);
    });
}

scrollToTop(scrollButton, window);


// buttons
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const bullets = document.querySelectorAll('.bullets li'); 


// Slider function
const sliderContainer = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides img');
const tran = 'transform .5s ease-in-out';

// counter
let counter = 1;
const size = slide[0].clientWidth;



sliderContainer.style.transform = `translateX(${-size * counter}px)`;
const slider = (container,nextBtn, prevBtn, sec,bullets) => {
    //change slide every x second
    setInterval(nextBtnEvent, sec);

    // Button Listeners
    nextBtn.addEventListener('click', nextBtnEvent);
    prevBtn.addEventListener('click', prevBtnEvent);
    container.addEventListener('transitionend', slideEffect);
    bulletsEvent(bullets);
};

// events functions
const nextBtnEvent = () => {
    if (counter >= slide.length - 1) return;
    sliderContainer.style.transition = tran;
    counter++;
    sliderContainer.style.transform = `translateX(${-size * counter}px)`;
};

const prevBtnEvent = () => {
    if (counter <= 0) return;
    sliderContainer.style.transition = tran;
    counter--;
    sliderContainer.style.transform = `translateX(${-size * counter}px)`;
}

// slide effect function
const slideEffect = () => {
    if (slide[counter].id === 'lastClone') {
        sliderContainer.style.transition = 'none';
        counter = slide.length - 2;
        sliderContainer.style.transform = `translateX(${-size * counter}px)`;
    }

    if (slide[counter].id === 'firstClone') {
        sliderContainer.style.transition = 'none';
        counter = slide.length - counter;
        sliderContainer.style.transform = `translateX(${-size * counter}px)`;
    }  

}

// bullet action function
const bulletsEvent = (bullets) => {
    bullets.forEach( (bullet,index) => {
        bullet.addEventListener('click', () => {
            sliderContainer.style.transition = tran;
            counter = index + 1;
            sliderContainer.style.transform = `translateX(${-size * counter}px)`;
        });
    })
}

slider(sliderContainer, nextButton, prevButton, 3000,bullets);