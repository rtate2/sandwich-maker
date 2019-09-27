import utilities from "../helpers/utilities.js";

const veggies = [
    {id: 'veggies1', name: 'onion', price: 35},
    {id: 'veggies2', name: 'tomato', price: 35},
    {id: 'veggies3', name: 'spinach', price: 35},
    {id: 'veggies4', name: 'olives', price: 35}
];

const printVeggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${veggies[i].id}">
        <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name} ${veggies[i].price}</label>
        </div>
        `
    }
    utilities.printToDom('veggies-selection', domString)
};

export default { printVeggieOptions }