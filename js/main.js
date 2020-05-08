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

// I thought a garbage check would be a good idea.
// Botched it up.
// const garbageCheck = () => {
//     if (parseInt($inputVal, 10) !== Number) {
//         $inputVal = $('input').val(0);
//     }
// }

const setInputVal = () => {
    //garbageCheck(); // This function is not complete
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
