// Получаем текущий URL
const currentUrl = window.location.href;

// Находим все ссылки в меню
const menuLinks = document.querySelectorAll('nav ul li a');

// Перебираем все ссылки и сравниваем их с текущим URL
menuLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});