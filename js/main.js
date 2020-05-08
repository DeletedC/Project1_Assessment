console.log("main.js CONNECTED");

///////////////////////
// Variables
///////////////////////

let $result = $('#result');
const $btnPlus = $('#btnPlus');
const $btnMinus = $('#btnMinus');
const $input = $('input');
let $inputVal = $('input').val();

/////////////////////
// Functions
/////////////////////

const setInputVal = () => {
    $inputVal = $('input').val();
    console.log($inputVal);
}

const addNumbers = () => {
    setInputVal();
    const resultAsNumber = parseInt($result.text(), 10);
    const inputAsNumber = parseInt($inputVal, 10);
    $result.text(resultAsNumber + inputAsNumber);  
}

const subtractNumbers = () => {
    setInputVal();
    const resultAsNumber = parseInt($result.text(), 10);
    const inputAsNumber = parseInt($inputVal, 10);
    $result.text(resultAsNumber - inputAsNumber);   
}

////////////////////////////
// Event Listeners
////////////////////////////

$btnPlus.on('click', addNumbers);
$btnMinus.on('click', subtractNumbers);
$input.on('click', setInputVal);
