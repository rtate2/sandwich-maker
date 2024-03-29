// importing the printToDom
import utilities from '../helpers/utilities.js'

// creating the array of bread
const breads = [
    {id: 'bread1', name: 'Wheat', price: 200},
    {id: 'bread2', name: 'White', price: 200},
    {id: 'bread3', name: 'Honey-oat', price: 250},
    {id: 'bread4', name: 'Italian', price: 250},
];

const getSelectedBread = () => {
    const selectedBread = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
        for (let i = 0; i < breadCheckboxes.length; i++) {
            for (let k = 0; k < breads.length; k++) {
                if (breadCheckboxes[i].checked && breadCheckboxes[i].id === breads[k].id) {
                    selectedBread.push(breads[k]);
                }
            }
        }
        return selectedBread;
};

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${breads[i].id}"> 
        <label class="form-check-label" for="${breads[i].id}">${breads[i].name} ${breads[i].price}</label>
        </div>
    `;
    };
    utilities.printToDom('bread-selection', domString)
};

export default { printBreadOptions, getSelectedBread }