console.log("main.js CONNECTED");

///////////////////////
// Variables
///////////////////////

let $result = $('#result');
const $btnPlus = $('#btnPlus');
const $btnMinus = $('#btnMinus');
let $input = $('input').val();

/////////////////////
// Functions
/////////////////////

const addNumbers = () => {
    const resultAsNumber = parseInt($result.text(), 10);
    const inputAsNumber = parseInt($input, 10);
    $result.text(resultAsNumber + inputAsNumber);  
}

const subtractNumbers = () => {
    const resultAsNumber = parseInt($result.text(), 10);
    const inputAsNumber = parseInt($input, 10);
    $result.text(resultAsNumber - inputAsNumber);   
}

////////////////////////////
// Event Listeners
////////////////////////////

$btnPlus.on('click', addNumbers);
$btnMinus.on('click', subtractNumbers);