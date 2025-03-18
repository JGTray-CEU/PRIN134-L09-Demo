document.getElementById("highlightbtn").addEventListener("click", () => {
    const ingredients = document.querySelectorAll("#recipe-ingredients li");
    ingredients.forEach((item, index) => {
        item.style.backgroundColor = index % 2 === 0 ? "#8fd3fe" : "#ffffff";
    });
});

document.getElementById("checkbtn").addEventListener("click", () => {
    setTimeout(() => {
        const instructions = document.querySelectorAll("#recipe-instructions li");
        instructions.forEach((instruction) => {
            instruction.style.textDecoration = "line-through";
            instruction.style.color = "gray";
        });
    }, 3000);
});

document.getElementById("resetbtn").addEventListener("click", () => {
    const instructions = document.querySelectorAll("#recipe-instructions li");
    instructions.forEach((instruction) => {
        instruction.style.textDecoration = "none";
        instruction.style.color = "black";
    });
});

const ingredientsHeader = document.querySelectorAll(".headers")[0];
ingredientsHeader.addEventListener("click", () => {
    ingredientsHeader.classList.add("animate__animated", "animate__bounce");
    ingredientsHeader.addEventListener("animationend", () => {
        ingredientsHeader.classList.remove("animate__animated", "animate__bounce");
    });
});

const instructionsHeader = document.querySelectorAll(".headers")[1];
instructionsHeader.addEventListener("click", () => {
    instructionsHeader.classList.add("animate__animated", "animate__flash");
    instructionsHeader.addEventListener("animationend", () => {
        instructionsHeader.classList.remove("animate__animated", "animate__flash");
    });
});

const cakeImage = document.getElementById("cake");
cakeImage.addEventListener("click", () => {
    cakeImage.classList.add("animate__animated", "animate__zoomIn");
    cakeImage.addEventListener("animationend", () => {
        cakeImage.classList.remove("animate__animated", "animate__zoomIn");
    });
});