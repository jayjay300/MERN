const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout


});

const questions = [
    "What's your name? ",
    "Where is your location? ",
    "What are you working on? "

];

const collectAnswers = (questions,done) => {
    const answers = [];
    const [firstQuestion] = questions;
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    }
   // done(answers);

    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers =>{
    console.log("Thank you! ");
    console.log(answers);
    process.exit();
});