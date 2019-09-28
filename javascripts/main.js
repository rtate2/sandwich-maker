import bread from "./components/bread.js";
import meat from "./components/meat.js";
import cheese from "./components/cheese.js";
import condiments from "./components/condiments.js";
import veggies from "./components/veggies.js";
import orderButton from "./components/orderButton.js";

// init function always goes in the main.js
const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    veggies.printVeggieOptions();
    orderButton.printOrderButton();
};

init();