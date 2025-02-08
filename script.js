let currentMode = "";
let cards = {};
let finalLocations = {};
let sexLocations = {};

// Загружаем карточки из JSON
fetch('extended_cards_200_mixed.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
    })
    .catch(error => console.error('Ошибка загрузки карточек:', error));

// Загружаем финальные локации
fetch('final_locations_extended.json')
    .then(response => response.json())
    .then(data => {
        finalLocations = data;
    })
    .catch(error => console.error('Ошибка загрузки мест финала:', error));

// Загружаем места для секса
fetch('sex_locations.json')
    .then(response => response.json())
    .then(data => {
        sexLocations = data;
    })
    .catch(error => console.error('Ошибка загрузки локаций:', error));

function showModes() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('modeScreen').classList.remove('hidden');
}

function startGame(mode) {
    currentMode = mode;
    document.getElementById('modeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
}

function getRandomCard() {
    let cardList = cards[currentMode];
    return cardList[Math.floor(Math.random() * cardList.length)];
}

function spinWheel() {
    let randomCard = getRandomCard();
    let locationCategory = Object.keys(sexLocations)[Math.floor(Math.random() * Object.keys(sexLocations).length)];
    let sexLocation = sexLocations[locationCategory][Math.floor(Math.random() * sexLocations[locationCategory].length)];

    let finalCategory = Object.keys(finalLocations)[Math.floor(Math.random() * Object.keys(finalLocations).length)];
    let finalLocation = finalLocations[finalCategory][Math.floor(Math.random() * finalLocations[finalCategory].length)];

    let wheel = document.getElementById("wheel");
    let cardContainer = document.getElementById("cardContainer");
    let card = document.getElementById("card");

    wheel.classList.add("spin");
    setTimeout(() => {
        wheel.classList.remove("spin");
        cardContainer.classList.remove("hidden");
        card.classList.add("flip");
        card.querySelector(".card-back").innerHTML = `<h2>${randomCard}</h2>
        <p><strong>Место:</strong> ${sexLocation}</p>
        <p><strong>Финал:</strong> ${finalLocation}</p>`;
    }, 2000);
}

function goBack() {
    document.getElementById('modeScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('settingsScreen').classList.add('hidden');
    document.getElementById('helpScreen').classList.add('hidden');
    document.getElementById('cardContainer').classList.add('hidden');
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
