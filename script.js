function startGame() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
}

function showSettings() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('settingsScreen').classList.remove('hidden');
}

function showHelp() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('helpScreen').classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
    document.querySelector('.container').classList.remove('hidden');
}

function spinWheel() {
    let wheel = document.getElementById("wheel");
    let cardContainer = document.getElementById("cardContainer");
    let card = document.getElementById("card");

    wheel.classList.add("spin");
    setTimeout(() => {
        wheel.classList.remove("spin");
        cardContainer.classList.remove("hidden");
        card.classList.add("flip");
    }, 2000);
}

function toggleSound() {
    alert("Функция звука скоро появится!");
}

function toggleTheme() {
    alert("Функция смены темы скоро появится!");
}
