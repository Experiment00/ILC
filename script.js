const burgerBuTTon = document.getElementById('#burger-button');
    const burgerMenu = document.getElementById('#burger-menu');
    const body = document.body;

    burgerBuTTon.addEventListener("click" , burgerButton);

    function burgerButton(e) {
      e.preventDefault();
      // Переключаем стили элементов при клике
      burger-menu.classList.toggle("open");
      burger-button.classList.toggle("active");
      body.classList.toggle("noscroll");
      renderPopup();
    }

//     burgerButton.addEventListener('click', () => {
//         burgerMenu.addEventListener.toggle('hidden'); 
// });

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