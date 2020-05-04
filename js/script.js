$(document).ready(function() {
    $("#input__phone").mask("+375 (99) 999-99-99");
});

const SCROLL_HIDDEN_NAV_VALUE = 150;
const REQUEST_URL_ADDRESS = 'https://gruzobot.herokuapp.com/api/feedback';
// const REQUEST_URL_ADDRESS = 'http://localhost:8082/api/feedback';

let $el = document.querySelector('.nav');
let $burger = document.querySelector('.nav__burger');
let $menu = document.querySelector('.nav__menu');
let $confirm = document.querySelector('.feedback__submit');

window.onscroll = () => {
    let has = $el.classList.contains('opacity');
    window.pageYOffset > SCROLL_HIDDEN_NAV_VALUE ?
        has ? `` : $el.classList.add('opacity') :
        has ? $el.classList.remove('opacity') : ``
};

$burger.addEventListener('click', () => {
    $burger.classList.toggle('active');
    $menu.classList.toggle('active');
});

document.querySelectorAll('.nav__item-href')
    .forEach(item => {
        item.addEventListener('click', e => {
            $burger.classList.remove('active');
            $menu.classList.remove('active');
        })
    });

$confirm.addEventListener('click', () => {
    let name = document.getElementById('input__name').value;
    let phone = document.getElementById('input__phone').value;

    if (!name && !phone) {
        alert('Пожалуйста, заполните все поля');
        return false;
    }

    fetch(REQUEST_URL_ADDRESS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, phone
        })
    }).then(() => alert('Спасибо за заявку! В течении 10-ти минут с Вами свяжется менеджер.'))
        .catch(/* handle err */);
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
} else {
    // код для обычных устройств
}