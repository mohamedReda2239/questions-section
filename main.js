
var trackedButton = document.getElementById("tracker");

// select all buttons 
var allButtons = document.querySelectorAll("button");


allButtons.forEach(function (eachButton) {

    eachButton.addEventListener("click", function () {
    
        // select clicked button
        let clickedButton = this;
        // select the question of clicked button
        let selectedQuestion = clickedButton.parentElement.parentElement;
        // toggle active class to 
        selectedQuestion.classList.toggle("active");

        // select all questions except selected one
            // 1- select all questions
                let allQuestions = document.querySelectorAll(".question");
            // 2- put the closing question in one array
                let closingQuestions = [];
                // loop all questions and push closing one
                for (let i = 0; i < allQuestions.length; i++) {
                    
                    if (allQuestions[i] != selectedQuestion) {
                        closingQuestions.push(allQuestions[i]);
                    }
                }
            // 3- loop closingquestions and close them
            for (let i = 0; i < closingQuestions.length; i++ ) {
                closingQuestions[i].classList.remove("active");
            }
    });
});