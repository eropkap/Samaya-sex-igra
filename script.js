
document.addEventListener("DOMContentLoaded", function () {
    let wheel = document.getElementById("wheel");
    let cardContainer = document.getElementById("cardContainer");
    let cardFront = document.querySelector(".card-front");
    let cardBack = document.querySelector(".card-back");

    function spinWheel() {
        let angle = Math.floor(Math.random() * 3600) + 1800; // Случайный угол вращения
        wheel.style.transition = "transform 4s ease-out";
        wheel.style.transform = `rotate(${angle}deg)`;

        setTimeout(() => {
            revealCard();
        }, 4500); // Появление карточки после вращения
    }

    function revealCard() {
        let randomIndex = Math.floor(Math.random() * cards.length);
        let selectedCard = cards[randomIndex];
        let finalLocation = getFinalLocation(selectedCard.text);

        cardFront.innerText = selectedCard.text;
        cardBack.innerText = `Финиш: ${finalLocation}`;

        cardContainer.classList.remove("hidden");
        cardContainer.classList.add("flip");
    }

    function getFinalLocation(taskText) {
        for (let key in finalLocations.mapping) {
            if (taskText.includes(key)) {
                let options = finalLocations.locations[finalLocations.mapping[key]];
                return options[Math.floor(Math.random() * options.length)];
            }
        }
        let allOptions = Object.values(finalLocations.locations).flat();
        return allOptions[Math.floor(Math.random() * allOptions.length)];
    }

    window.spinWheel = spinWheel;
});
