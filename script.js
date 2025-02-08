let cards = {};

// Загружаем карточки из JSON
fetch('explicit_cards.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
    })
    .catch(error => console.error('Ошибка загрузки карточек:', error));

function startGame() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
}

function spinWheel() {
    let categories = Object.keys(cards);
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    let cardList = cards[randomCategory];
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
    document.getElementById('gameScreen').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
}
