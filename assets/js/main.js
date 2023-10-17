

/*========== SCROLL REVEAL ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true
});

sr.reveal('.gallery__container');
sr.reveal('.section__date.left', {delay: 400, origin: 'left'})
sr.reveal('.section__description.left', {delay: 800, origin: 'left'})
sr.reveal('.section__date.right', {delay: 400, origin: 'right'})
sr.reveal('.section__description.right', {delay: 800, origin: 'right'})
sr.reveal('.left__post', {delay: 1200, origin: 'left'})
sr.reveal('.right__post', {delay: 1200, origin: 'right'})
sr.reveal('.left__img', {distance: '120px', origin: 'left'})
sr.reveal('.right__img', {distance: '120px', origin: 'right'})