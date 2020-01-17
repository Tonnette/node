const fs = require('fs');
const myHTML = require('./generateHTML');
var inquirer = require("inquirer");

var indexContent = myHTML.generateHTML();

inquirer
    .prompt([
        {
            type: "checkbox",
            name: "color",
            message: "What is your favourite colour?",
            choices: [
                "green",
                "blue",
                "pink",
                "red",
            ],
        },

    ])

    .then(data => {
        console.info("Answer: ", data.color);


        var filename = data.color + ".html";
          
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("Success!");
      
        });

        if (data.color[0] === "green"){
            console.log("you chose green");

        }
        else if (data.color[0] === "blue"){
            console.log("you chose blue");

        }
        else if (data.color[0] === "pink"){
            console.log("you chose pink");

        }
        else if (data.color[0] === "red"){
            console.log("you chose red");

        }

      

         
        

        // function writeToFile(fileName, data) {
         
        // }
        
        // function init() {
        
        // init();


        // fs.writeFile("index.html", indexContent, function(err) {
//     if (err) {
//         return console.log(err);
//       }
    
//       console.log("Success!");

// });
    });
    
    // .then(function(data) {

    //     var filename = data.choice[0] + ".html";
      
    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      
    //       if (err) {
    //         return console.log(err);
    //       }
      
    //       console.log("Success!");

    //     });
    // });

// const questions = [

// ];

// function writeToFile(fileName, data) {

// }

// function init() {

// init();
