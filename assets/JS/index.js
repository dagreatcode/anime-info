const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "what is your name?"
    }
]).then(response => {
    console.log(response);

    const htmlString = `<!DOCTYPE html>
    <html class="no-js">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Vincent</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="./assets/CSS/style.css" />
        </head>
        <body>
            <h1>Vincent World</h1>
            <h1>${response.userName}</h1>
            <script src="./assets/JS/index.js" async defer></script>
        </body>
    </html>
    `;
    fs.writeFile("../../index2.html", htmlString, function (err) {
        if (err) throw err;
        console.log("Successfully created index.html");
    });
}).catch((err) => {
    console.log(err);
});