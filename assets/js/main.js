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

var start_month_text = document.getElementById("selected__start__month");
var start_year_text = document.getElementById("selected__start__year");
var end_month_text = document.getElementById("selected__end__month");
var end_year_text = document.getElementById("selected__end__year");
var gallery__containers = document.getElementsByClassName("gallery__container");


function set_start_month(month) {
    // console.log("Set start month : " + months[month - 1]);
    start_month = month;
    start_month_text.innerHTML = months[start_month - 1];
}

function set_start_year(year) {
    // console.log("Set start year : " + year);
    start_year = year;
    start_year_text.innerHTML = start_year;
}

function set_end_month(month) {
    // console.log("Set end month : " + months[month - 1]);
    end_month = month;
    end_month_text.innerHTML = months[end_month - 1];
}

function set_end_year(year) {
    // console.log("Set end year : " + year);
    end_year = year;
    end_year_text.innerHTML = end_year;
}

function filter() {
    console.log("Filter");
    for (let i = 0; i < gallery__containers.length; i++) {
        var container = gallery__containers[i];
        var current_month = get_month(container.id);
        var current_year = get_year(container.id);
        if (current_year == start_year && current_month >= start_month) {
            console.log("lower bounds ok");
        }
        else if (current_year > start_year && current_year < end_year) {
            console.log("ok");
        }
        else if (current_year == end_year && current_month <= end_month) {
            console.log("upper bounds ok");
        }
        else {
            console.log("not ok");
        }
    }
}

function get_month(date) {
    var splitted = date.split("-");
    return splitted[0];
}

function get_month_name(date) {
    return months[get_month(date) - 1];
}

function get_year(date) {
    var splitted = date.split("-");
    return splitted[1];
}

function clear_filter() {
    // console.log("Clear Filter");
    start_month_text.innerHTML = "OCAK";
    start_month = 1;
    start_year_text.innerHTML = "2023";
    start_year = 2023;
    end_month_text.innerHTML = "ARALIK";
    end_month = 12;
    end_year_text.innerHTML = "2034";
    end_year = 2034;
    filter();
}

/*========== SCROLL REVEAL ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200,
    reset: true,
});

sr.reveal('.gallery__container');
sr.reveal('.section__date.left', {delay: 400, origin: 'left'});
sr.reveal('.section__description.left', {delay: 800, origin: 'left'});
sr.reveal('.section__date.right', {delay: 400, origin: 'right'});
sr.reveal('.section__description.right', {delay: 800, origin: 'right'});
sr.reveal('.left__post', {delay: 1200, origin: 'left'});
sr.reveal('.right__post', {delay: 1200, origin: 'right'});
sr.reveal('.left__img', {distance: '120px', origin: 'left'});
sr.reveal('.right__img', {distance: '120px', origin: 'right'});