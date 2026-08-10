/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// // V1
// import { input } from '@inquirer/prompts';
// import fs from "fs";
// import qr from "qr-image";

// const url = await input({ message: "Enter the URL of the website: "});

// if (!url) {
//     console.log("no url entered");
// } else if (!url.includes("https://")) {
//     console.log("must be a url")
// } else {
//     var qr_png = qr.image(url, { type: 'png' });
//     qr_png.pipe(fs.createWriteStream("QRcode.png"));
    
//     fs.writeFile("URL.txt", url, (err) => {
//         if (err) throw err;
//         console.log("Created file successfully");
//     })
// }

// V2

import fs from 'fs';
import inquirer from 'inquirer';
import qr from "qr-image"
inquirer.prompt([
    {
        message: "What is the name of the website?",
        name: "URL"
    }, 
    {
        message: "What size do you want for the image? (1-100, default: 5)",
        name: "size"
    },
    {
        message: "How much margin do you want for the QR code? (1-10, default: 4)",
        name: "margin"
    }
])
.then((answers) => {
    let url = answers.URL;
    if (!url) {
        console.log("URL must not be empty!")
        return;
    }

    if (!url.toLowerCase().includes("https://")) {
        console.log("URL Must be valid!")
        return;
    }

    let size = Number(answers.size);

    if (size <= 0 || size > 100) {
        console.log("set size to default size: 5 due to low size or exceed limit size")
        size = 5;
    }

    let margin = Number(answers.margin);

    if (margin < 1 || margin > 10) {
        console.log("set margin to default size: 4 due to low margin or exceed limit margin")
        margin = 4;
    }

    // console.log(size)
    // console.log(margin)

    const qr_png = qr.image(url, {type: 'png', size: size, margin: margin});
    var output = fs.createWriteStream('QRcode.png');

    output.on("error", (err) => {
        console.error("Error creating QR code:", err);
    });

    output.on("finish", () => {
        console.log("Qr code created successfully!")
    })

    qr_png.pipe(output);

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("txt file created successfully!")
    })
})
.catch((error) => {
    throw error;
})