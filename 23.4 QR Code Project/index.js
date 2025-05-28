/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        type: "input",
        name: "url",
        message: "Enter a link: "
    }
  ])
  .then((answers) => {
    let url = answers.url;
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("File created!");
    });
    var qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream(`qr_img.png`));

    var imageStream = qr.imageSync(url, {type: "png"});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("ERROR!");
    } else {
      // Something else went wrong
      console.log("ERROR!");
    }
  });

