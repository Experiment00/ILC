// const burgerButton = document.getElementById('burger-button');
//     const burgerMenu = document.getElementById('burger-menu');

//     burgerButton.addEventListener('click', () => {
//         burgerMenu.addEventListener.toggle('hidden'); 
// });

let burgerbutton = document.querySelector('.burger-button');
burgerbutton.addEventListener('click', openPopUp);

function openPopUp() {
  let mob = document.querySelector('.burger-button');
  mob.style.display = 'block';
}

let burgerbutton = document.querySelector('.burger-button');
burgerbutton.addEventListener('click', hidePopUp);

function hidePopUp() {
  let mob = document.querySelector('.burger-button');
  mob.style.display = 'none';
}


const vkontakteUrl = 'https://vk.com/';

function openLink(url) {
    window.open(url, '_blank'); 
}

const instagramUrl = 'https://www.instagram.com/maksimovich.kit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

function openLink(url) {
    window.open(url, '_blank'); 
}

const twitterUrl = 'https://twitter.com';

function openLink(url) {
    window.open(url, '_blank'); 
}

const facebookUrl = 'https://facebook.com';

function openLink(url) {
    window.open(url, '_blank'); 
}