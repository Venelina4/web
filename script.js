// Добавяме "click" събитие на всеки линк в основното меню
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#mainMenu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // event.preventDefault(); // ако искаш да не презарежда страницата
            console.log(`Натиснат линк: ${this.textContent}`);
            // alert(`Отвори страница: ${this.textContent}`);
        });
    });
});
