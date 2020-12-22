const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "what is your name?"
    },
    {
        name: "hobby",
        type: "input",
        message: "what is your name?"
    },
    {
        name: "linkedIn",
        type: "input",
        message: "what is your name?"
    }
]).then(response => {
    console.log(response);

    const htmlString = generateHtml(response.userName, response.hobby, response.linkedIn);

    // fs.writeFile("../../index2.html", htmlString, function (err) {
    //     if (err) throw err;
    //     console.log("Successfully created index.html");
    // });
    writeFileAsync("index2.html, htmlString")
        .then(() => {
            console.log("Wrote file...");
        })
        .catch((err) => {
            console.log(err);
        });
}).catch((err) => {
    console.log(err);
});

function generateHtml(name, hobby, linkedInUrl) {
    return `<!DOCTYPE html>
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
            <h1>${name}</h1>
            <h1>${hobby}</h1>
            <h1>${linkedInUrl}</h1>
            <script src="./assets/JS/index.js" async defer></script>
        </body>
    </html>
    `;
}