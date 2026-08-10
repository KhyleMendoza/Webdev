/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import fs from "fs";
import qr from "qr-image";

const url = await input({ message: "Enter the URL of the website: "});

if (!url) {
    console.log("no url entered");
} else if (!url.includes("https://")) {
    console.log("must be a url")
} else {
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream("QRcode.png"));
    
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("Created file successfully");
    })
}
