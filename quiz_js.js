
// =============== DECLARATIONS ================================================================

const totalAnswers = 5 // edit for total number of questions.
const correctAnswersTally = [] // update when a question is answered correctly
const questionAnswers = ["Beholder", "Dragon", "Lich", "Mimic", "Mind Flayer"]

const beholder = questionAnswers[0]
const dragon = questionAnswers[1]
const lich = questionAnswers[2]
const mimic = questionAnswers[3]
const mindFlayer = questionAnswers[4]

// const quizScore = correctAnswersTally.length

// =============== FUNCTIONS ================================================================

// // Keep tally of questions answered correctly
// function correctAnswer(count) {
//     if (correctAnswersTally.length <= totalAnswers) {
//     correctAnswersTally.push(count) && console.log("Added correct answer to tally")
//     }
//     else {
//         return alert("Well well well... Look at the big brain on you! You answered all the questions correct ")
//     }
// }
// ================= ELEMENT SHOW/HIDE FUNCTIONS ============================================

function showIntro() {
    document.getElementById("intro-context").style.display = "none";
    document.getElementById("intro-jumbotron").style.display = "flex";
    document.getElementById("go-to-questions").style.display = "block";
}

function showQ1() {
    document.getElementById("go-to-questions").style.display = "none";
    document.getElementById("intro-jumbotron").style.display = "none";
    document.getElementById("first-question").style.display = "flex";
}

function showQ2() {
    document.getElementById("first-question").style.display = "none";
    document.getElementById("second-question").style.display = "flex";
}

function showQ3() {
    document.getElementById("second-question").style.display = "none";
    document.getElementById("third-question").style.display = "flex";
}

function showQ4() {
    document.getElementById("third-question").style.display = "none";
    document.getElementById("fourth-question").style.display = "flex";
}

function showQ5() {
    document.getElementById("fourth-question").style.display = "none";
    document.getElementById("fifth-question").style.display = "flex";
}

function showResults() {
    document.getElementById("intro-jumbotron").style.display = "none";
    document.getElementById("fifth-question").style.display = "none";
    document.getElementById("results").style.display = "flex";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navbar").scrollIntoView();
    quizResult(correctAnswersTally);
    quizResultResponse(correctAnswersTally)
    console.log(quizResult)
    console.log(quizResultResponse)
}

// ================= QUESTION FUNCTIONS =====================================================
function q1(param) {
    if (param === "Beholder") {
        correctAnswersTally.push("First")
            && console.log(param, "is correct. Adding to the tally of correct answers and moving to the next question.")
            && changeQuestion2();
    } else {
        console.log(param, "is incorrect. Moving to next question.") && changeQuestion2();
    }
}

function q2(param) {
    if (param === "Mind Flayer") {
        correctAnswersTally.push("Second")
            && console.log(param, "is correct. Adding to the tally of correct answers and moving to the next question.")
            && changeQuestion3();
    } else {
        console.log(param, "is incorrect. Moving to next question.") && changeQuestion3();
    }
}

function q3(param) {
    if (param === "Mimic") {
        correctAnswersTally.push("Third")
            && console.log(param, "is correct. Adding to the tally of correct answers and moving to the next question.")
            && changeQuestion4();
    } else {
        console.log(param, "is incorrect. Moving to next question.") && changeQuestion4();
    }
}

function q4(param) {
    if (param === "Lich") {
        correctAnswersTally.push("Fourth")
            && console.log(param, "is correct. Adding to the tally of correct answers and moving to the next question.")
            && changeQuestion5();
    } else {
        console.log(param, "is incorrect. Moving to next question.") && changeQuestion5();
    }
}

function q5(param) {
    if (param === "Dragon") {
        correctAnswersTally.push("Fifth")
            && console.log(param, "is correct. Adding to the tally of correct answers and moving to the next question.")
            && changeResults();
    } else {
        console.log(param, "is incorrect. Moving to next question.") && changeResults();
    }
}
// ================= RESULTS FUNCTIONS =====================================================

function quizResult(correctAnswersTally) {
    document.getElementById("total-correct").innerHTML = (correctAnswersTally.length + " out of 5 creatures")
}

function quizResultResponse(correctAnswersTally) {
    let response;
    if (correctAnswersTally.length === 0) {
        response = "Really! None! You'd better get praying, because only the Gods will keep you alive out here!";
    } else if (correctAnswersTally.length === 1) {
        response = "Well. We'd better hope if you encounter anything out here, it's that one thing, and that one thing alone!";
    } else if (correctAnswersTally.length === 2) {
        response = "Not bad. I think with some luck, and Gods willing, you should just about survive out here.";
    } else if (correctAnswersTally.length === 3) {
        response = "Yes. Well done. You're well on you way to surviving these dangerous beasties. Or at least knowing which ones to run away from!";    
    } else if (correctAnswersTally.length === 4) {
        response = "Ah! Well done! There's some cunning in you after all, it seems. You'll survive just fine out here.";
    } else {
        response = "Shit and ashes! Are you trying to put me out of job! You'd best get yourself to Candlekeep, I think Elminster would love you!";
    } 
    document.getElementById("congratulations").innerText = (response);
}

// ================= TESTING SECTION =====================================================


