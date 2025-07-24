import inquirer from "inquirer";

inquirer
    .prompt([
        {
            "type": "input",
            "name": "message",
            "message": "Enter the message/URL to encode:"
        }
    ])
    .then((answers) => {
        console.log(answers); 
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    });