import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        type:"list",
        name:"pitanje",
        message:"Koji je glavni grad Hrvatske?",
        choices:["Split","Zagred","Dubrovnik","Slavonski Brod"]
    }
  ])
  .then((answers) => {
    if(answers.pitanje === "Zagreb"){
        console.log("Točno !!");
    }
    else{
        console.log("Smrdljivko, netočno");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });