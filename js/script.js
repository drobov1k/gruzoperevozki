const SCROLL_HIDDEN_NAV_VALUE = 150;
const REQUEST_URL_ADDRESS = '';

let $el     = document.querySelector('.nav');
let $burger = document.querySelector('.nav__burger');
let $menu   = document.querySelector('.nav__menu');

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

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
} else {
    // код для обычных устройств
}