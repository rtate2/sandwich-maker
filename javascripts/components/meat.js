// import the printToDom
import utilities from '../helpers/utilities.js'

const meats = [
    {id: 'meats1', name: 'ham', price: 500},
    {id: 'meats2', name: 'turkey', price: 500},
    {id: 'meats3', name: 'chicken', price: 500},
    {id: 'meats4', name: 'tuna', price: 500},
]

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

export default { printMeatOptions }