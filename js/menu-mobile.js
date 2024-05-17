document.addEventListener('DOMContentLoaded', function() {
    let bars = document.querySelector('.bars');
    let nav = document.querySelector('.nav');

    bars.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    // Добавляем обработчик клика на всем документе
    document.addEventListener('click', function(event) {
        // Проверяем, был ли клик вне области меню или кнопки bars
        if (!nav.contains(event.target) && !bars.contains(event.target)) {
            nav.style.display = 'none'; // Закрываем меню
        }
    });

    // Добавляем обработчик клика на все ссылки в меню
    let links = document.querySelectorAll('.nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.style.display = 'none'; // Закрываем меню при клике на ссылку
        });
    });
});