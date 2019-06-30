const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("John \n");
questionApp.stdin.write("USA \n");
questionApp.stdin.write("A website \n");
questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log("question app process exited");
});