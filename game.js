// Создаем игровое поле
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;

// Загружаем изображение фона
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";

// Загружаем изображение героя
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";

// Объекты игры
var hero = {
    speed: 256 // скорость в пикселях в секунду
};

// Обработка пользовательского ввода
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Обновление объектов игры
var update = function (modifier) {
    if (38 in keysDown) { // Пользователь нажимает клавишу вверх
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Пользователь нажимает клавишу вниз
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Пользователь нажимает клавишу влево
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Пользователь нажимает клавишу вправо
        hero.x += hero.speed * modifier;
    }
};

// Отрисовка всего
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
};

// Главный игровой цикл
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Запрашиваем новый кадр
    requestAnimationFrame(main);
};

// Поехали!
var then = Date.now();
main();
