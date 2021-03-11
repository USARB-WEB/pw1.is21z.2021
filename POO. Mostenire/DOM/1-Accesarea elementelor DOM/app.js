const listItems = document.getElementsByTagName("li");

let i = 0;
for (const item of listItems) {
    if(i % 2 === 0) {
        item.style.backgroundColor = "red";
    }
    if(i === 6) {
        item.remove();
    }
    i++;
}

console.log(listItems);


const listItemQuerySelector = document.querySelectorAll("li");
console.log(listItemQuerySelector);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    const buttonElement = document.getElementById("buttonId");
    console.log(buttonElement);
    buttonElement.addEventListener("click", () => {
        document.body.style.backgroundColor = "yellow";
    });
});

