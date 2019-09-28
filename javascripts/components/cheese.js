import utilities from "../helpers/utilities.js"

const cheeses = [
    {id: 'cheese1', name: 'American', price: 100},
    {id: 'cheese2', name: 'Swiss', price: 100},
    {id: 'cheese3', name: 'Pepperjack', price: 100},
    {id: 'cheese4', name: 'Cheddar', price: 100},
];

const getSelectedCheese = () => {
    const selectedCheese = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
        for (let i = 0; i < cheeseCheckboxes.length; i++) {
            for (let k = 0; k < cheeses.length; k++) {
                if (cheeseCheckboxes[i].checked && cheeseCheckboxes[i].id === cheeses[k].id) {
                    selectedCheese.push(cheeses[k]);
                }
            }
        }
        return selectedCheese;
};

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
        <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name} ${cheeses[i].price}</label>
        </div>
        `
    }
    utilities.printToDom('cheese-selection', domString)
}

export default { printCheeseOptions, getSelectedCheese }