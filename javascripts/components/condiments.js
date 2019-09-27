import utilities from "../helpers/utilities.js";

const condiments = [
    {id: 'condiments1', name: 'mayo', price: 50},
    {id: 'condiments2', name: 'mustard', price: 50},
    {id: 'condiments3', name: 'dijon', price: 50},
    {id: 'condiments4', name: 'vinaigrette', price: 50}
];

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiments" id="${condiments[i].id}">
        <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name} ${condiments[i].price}</label>
        </div>
        `
    }
    utilities.printToDom('condiments-selection', domString)
}

export default { printCondimentOptions }