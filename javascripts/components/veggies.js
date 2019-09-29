import utilities from "../helpers/utilities.js";

const veggies = [
    {id: 'veggies1', name: 'Onion', price: 35},
    {id: 'veggies2', name: 'Tomato', price: 35},
    {id: 'veggies3', name: 'Spinach', price: 35},
    {id: 'veggies4', name: 'Olives', price: 35}
];

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggiesCheckboxes = document.getElementsByClassName('veggies');
        for (let i = 0; i < veggiesCheckboxes.length; i++) {
            for (let k = 0; k < veggies.length; k++) {
                if (veggiesCheckboxes[i].checked && veggiesCheckboxes[i].id === veggies[k].id) {
                    selectedVeggies.push(veggies[k]);
                }
            }
        }
        return selectedVeggies;
};

const printVeggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggies" id="${veggies[i].id}">
        <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name} ${veggies[i].price}</label>
        </div>
        `
    }
    utilities.printToDom('veggies-selection', domString)
};

export default { printVeggieOptions, getSelectedVeggies }