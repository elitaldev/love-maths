// This function does all the housekeeping before 
// the game starts
function gameSetup() {
    // Setup the listeners for the 3 buttons

    document.getElementById("btn-plus").addEventListener("click", additionQuestion);
    document.getElementById("btn-minus").addEventListener("click", subtractionQuestion);
    document.getElementById("btn-submit").addEventListener("click", submitAnswer);

}

function gameLoop() {

}

function additionQuestion() {

    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    let question = `What is ${a} + ${b}?`;
    document.getElementById('question-holder').innerText = question;

}

function subtractionQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    while (b > a) {
        b = Math.floor(Math.random() * 20) + 1;

    }

    let question = `What is ${a} - ${b}?`;
    document.getElementById('question-holder').innerText = question;
}


function submitAnswer() {
    alert('You pressed submit');
}

// Main program
gameSetup();
gameLoop();