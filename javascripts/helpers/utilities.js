// always in the utilities to be used on other pages
const printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId);
    divContainer.innerHTML = textToPrint;
};

export default { printToDom };