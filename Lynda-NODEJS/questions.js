const questions = [
    "What is your name?",
    "What's your zodiac?",
    "What do you program in?"
];

const answers= [];
const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};


ask();


process.stdin.on(`data`, data => {
  //  process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
   // process.exit();
   answers.push(data.toString().trim());

   if(answers.length < questions.length) {
       ask(answers.length);
   }else{
       process.exit();
   }
});

process.on('exit', () => {
    const [name, zodiac, lang] = answers;
    console.log(`


        Thanks, ${name}, I knew that a ${zodiac} would be programming in ${lang}. Typical!

    `)
});