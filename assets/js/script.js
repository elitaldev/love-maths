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

    let question = `${a} + ${b}`;
    document.getElementById('question-holder').innerText = question;
}

function subtractionQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    while (b > a) {
        b = Math.floor(Math.random() * 20) + 1;
    }
    let question = `${a} - ${b}`;
    document.getElementById('question-holder').innerText = question;
}

function submitAnswer() {
    let question = document.getElementById("question-holder").innerText;
    let answer = document.getElementById("answer-holder").value;
    if (question.includes("+")) {
        let operand = question.split("+")
        let a = operand[0];
        let b = operand[1];
        let isAnswerCorrect = (parseInt(a) + parseInt(b)) == answer;

        if (isAnswerCorrect) {
            alert("Well Done!!!");
            increasCorrect()
        } else {
            alert("Sorry Stupid Git");
            increaseWrong()
        }
    } else if (question.includes("-")) {
        let operands = question.split("-");
        let a = operands[0];
        let b = operands[1];
        let isAnswerCorrect = (parseInt(a) - parseInt(b)) == answer;

        if (isAnswerCorrect) {
            alert("Well Done!!!");
            increasCorrect()
            let wrong = document.getElementById("wrong-score").innerText;
            correct++;
            document.getElementById("wrong-score").innerText = wrong;
        }
    }
}

function increasCorrect() {
    let correct = document.getElementById("correct-score").innerText;
    correct++;
    document.getElementById("correct-score").innerText = correct;
}

function increaseWrong() {
    let wrong = document.getElementById("wrong-score").innerText;
    wrong++;
    document.getElementById("wrong-score").innerText = wrong;
}

// Main program
gameSetup();
gameLoop();