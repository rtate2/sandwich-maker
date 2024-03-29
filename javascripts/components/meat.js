// import the printToDom
import utilities from '../helpers/utilities.js'

const meats = [
    {id: 'meats1', name: 'Ham', price: 500},
    {id: 'meats2', name: 'Turkey', price: 500},
    {id: 'meats3', name: 'Chicken', price: 500},
    {id: 'meats4', name: 'Tuna', price: 500},
]

const getSelectedMeat = () => {
    const selectedMeat = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
        for (let i = 0; i < meatCheckboxes.length; i++) {
            for (let k = 0; k < meats.length; k++) {
                if (meatCheckboxes[i].checked && meatCheckboxes[i].id === meats[k].id) {
                    selectedMeat.push(meats[k]);
                }
            }
        }
        return selectedMeat;
};

const printMeatOptions = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++) {
        domString += `
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input meat" id= "${meats[i].id}">
        <label class="form-check-label" for="${meats[i].id}">${meats[i].name} ${meats[i].price}</label>
        </div>
        `;
    };
    utilities.printToDom('meat-selection', domString);
};

export default { printMeatOptions, getSelectedMeat }