import utilities from "../helpers/utilities.js";

const condiments = [
    {id: 'condiments1', name: 'Mayo', price: 50},
    {id: 'condiments2', name: 'Mustard', price: 50},
    {id: 'condiments3', name: 'Dijon', price: 50},
    {id: 'condiments4', name: 'Vinaigrette', price: 50}
];

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiments');
        for (let i = 0; i < condimentCheckboxes.length; i++) {
            for (let k = 0; k < condiments.length; k++) {
                if (condimentCheckboxes[i].checked && condimentCheckboxes[i].id === condiments[k].id) {
                    selectedCondiments.push(condiments[k]);
                }
            }
        }
        return selectedCondiments;
};

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

export default { printCondimentOptions, getSelectedCondiments }