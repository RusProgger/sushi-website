// Получаем ссылки на якори из навигационного меню
let links = document.querySelectorAll('.nav a');

// Добавляем обработчик события клика для каждой ссылки
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Отменяем стандартное поведение перехода по ссылке
        event.preventDefault();

        // Получаем id целевого элемента, к которому нужно прокрутить страницу
        let targetId = link.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);

        // Вычисляем расстояние до целевого элемента
        let offsetTop = targetElement.offsetTop;

        // Плавно прокручиваем к элементу
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Удаляем класс активности у всех ссылок перед добавлением класса активности к текущей ссылке
        links.forEach(function(link) {
            link.classList.remove('nav__link-active');
        });

        // Добавляем класс активности к текущей ссылке
        link.classList.add('nav__link-active');
    });
});




//    // Получаем ссылки на якори из навигационного меню
//     let links = document.querySelectorAll('.nav a');

//     // Добавляем обработчик события клика для каждой ссылки
//         links.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             // Отменяем стандартное поведение перехода по ссылке
//             event.preventDefault();

//             // Получаем id целевого элемента, к которому нужно прокрутить страницу
//             let targetId = link.getAttribute('href').substring(1);
//             let targetElement = document.getElementById(targetId);

//             // Вычисляем расстояние до целевого элемента
//             let offsetTop = targetElement.offsetTop;

//             // Плавно прокручиваем к элементу
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Получаем ссылки навигационного меню
//     let  linksы = document.querySelectorAll('.nav__link');

//     // Добавляем обработчик события клика для каждой ссылки
//     links.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             // Удаляем класс активности у всех ссылок перед добавлением класса активности к текущей ссылке
//             links.forEach(function(link) {
//                 link.classList.remove('nav__link-active');
//             });

//             // Добавляем класс активности к текущей ссылке
//             link.classList.add('nav__link-active');
//         });
//     });