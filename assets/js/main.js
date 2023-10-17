/*========== DATE SYSTEM ==========*/
let months = 
[
    'OCAK',
    'ŞUBAT',
    'MART',
    'NİSAN',
    'MAYIS',
    'HAZİRAN',
    'TEMMUZ',
    'AĞUSTOS',
    'EYLÜL',
    'EKİM',
    'KASIM',
    'ARALIK'
];

var start_month = 1;
var start_year = 2023;
var end_month = 12;
var end_year = 2034;

function set_start_month(month) {
    // console.log("Set start month : " + months[month - 1]);
    start_month = month;
    var start_month_text = document.getElementById("selected__start__month");
    start_month_text.innerHTML = months[start_month - 1];
}

function set_start_year(year) {
    // console.log("Set start year : " + year);
    start_year = year;
    var start_year_text = document.getElementById("selected__start__year");
    start_year_text.innerHTML = start_year;
}

function set_end_month(month) {
    // console.log("Set end month : " + months[month - 1]);
    end_month = month;
    var end_month_text = document.getElementById("selected__end__month");
    end_month_text.innerHTML = months[end_month - 1];
}

function set_end_year(year) {
    // console.log("Set end year : " + year);
    end_year = year;
    var end_year_text = document.getElementById("selected__end__year");
    end_year_text.innerHTML = end_year;
}

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