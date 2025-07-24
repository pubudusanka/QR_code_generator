import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


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
        const url = answers.message;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    });