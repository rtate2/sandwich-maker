import bread from "./components/bread.js";
import meat from "./components/meat.js";


// init function always goes in the main.js
const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
};

init();