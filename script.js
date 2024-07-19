// Получаем кнопку и баланс пользователя
const addBalanceButton = document.getElementById('addBalance');
let userBalance = 0;

// Обработчик нажатия на кнопку
addBalanceButton.addEventListener('click', () => {
    userBalance += 0.01;
    alert(`Баланс: ${userBalance.toFixed(2)} гривны`);
    // Здесь можно сохранить баланс в базе данных или локальном хранилище
});
