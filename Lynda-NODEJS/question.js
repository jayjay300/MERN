const collectAnswers = require("./lib/collectanswers");

const questions = [
    "What's your name? ",
    "Where is your location? ",
    "What are you working on? "

];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer",answer => console.log(`question answered: ${answer}`));

answerEvents.on("complete",answers =>{
    console.log("Thank you! ");
    console.log(answers);
    
});

answerEvents.on("complete", () => process.exit());