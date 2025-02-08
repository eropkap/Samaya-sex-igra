let currentMode = "";
let cards = {};

// Загружаем карточки из JSON
fetch('updated_game_modes_silent.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
    })
    .catch(error => console.error('Ошибка загрузки карточек:', error));

function showModes() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('modeScreen').classList.remove('hidden');
}

function startGame(mode) {
    currentMode = mode;
    document.getElementById('modeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
}

function spinWheel() {
    let cardList = cards[currentMode];
    let randomCard = cardList[Math.floor(Math.random() * cardList.length)];

    let wheel = document.getElementById("wheel");
    let cardContainer = document.getElementById("cardContainer");
    let card = document.getElementById("card");

    wheel.classList.add("spin");
    setTimeout(() => {
        wheel.classList.remove("spin");
        cardContainer.classList.remove("hidden");
        card.classList.add("flip");
        card.querySelector(".card-back").innerHTML = `<h2>${randomCard}</h2>`;
    }, 2000);
}

function goBack() {
    document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
    document.querySelector('.container').classList.remove('hidden');
}

function toggleSound() {
    alert("Функция звука скоро появится!");
}

function toggleTheme() {
    alert("Функция смены темы скоро появится!");
}

function setGameTime(minutes) {
    alert("Игра установлена на " + minutes + " минут!");
}
