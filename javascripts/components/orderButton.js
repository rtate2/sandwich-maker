import bread from "./bread.js";
import cheese from "./cheese.js";
import condiments from "./condiments.js";
import meat from "./meat.js";
import utilities from "../helpers/utilities.js";
import veggies from "./veggies.js";

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`;
    };
    utilities.printToDom('entire-sandwich', domString2)
};

const makeSandwichEvent = () => {
    const selectedBread = bread.getSelectedBread();
    const selectedMeat = meat.getSelectedMeat();
    const selectedCheese = cheese.getSelectedCheese();
    const selectedCondiments = condiments.getSelectedCondiments();
    const selectedVeggies = veggies.getSelectedVeggies();
    const allItems = selectedBread.concat(selectedMeat, selectedCheese, selectedCondiments, selectedVeggies);
    createFinalOrder(allItems);
};

const printOrderButton = () => {
    const domString = '<button id="order-button" type="button" class="btn btn-success">Order Sandwich</button>';
    utilities.printToDom('button-area', domString);
    document.getElementById('order-button').addEventListener('click', makeSandwichEvent);
};

export default { printOrderButton }