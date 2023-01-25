const totalAnswers = 5 // edit for total number of questions.
const correctAnswersTally = [] // update when a question is answered correctly

function correctAnswer(count) {
    if (correctAnswersTally.length <= totalAnswers) {
    correctAnswersTally.push(count) && console.log("Added correct answer to tally")
    }
    else {
        return alert("Well well well... Look at the big brain on you! You answered all the questions correct ")
    }
}

function alert() {
    window.alert("Stop getting distracted");
}
///////////////////// TEST SECTION //////////////////////////////
console.log(correctAnswer(1))

console.log(correctAnswersTally)

// console.log(correctAnswersTally.length)
