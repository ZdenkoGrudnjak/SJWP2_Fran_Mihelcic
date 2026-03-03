import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
        type:"number",
        name:"duzina",
        message:"unesi duzinu: ",
    },
    {
        type:"number",
        name:"visina",
        message:"unesi visinu: "
    }
  ])
  .then((answers) => {

//izracun povrsine
 const povrsina= answers.visina*answers.duzina;

    fs.appendFileSync("povrsina.txt", povrsina);
    console.log("Podaci su spremljeni u datoteku !");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });