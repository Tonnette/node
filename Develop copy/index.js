const fs = require('fs');
const generateHTML = require('./generateHTML');
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// console.log("what's in the HTML page? " + generateHTML)

const questions = [
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
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"

    }
]

inquirer
    .prompt(questions)
    .then(({ color, username }) => {
        console.log(color, username)
        API.getUsername(username)
        .then((response)=> {
            console.log(response.data.colorName);
        })
        // .then(function(data) {
        //     const html = generateHTML(data);
        //     return writeFileAsync ("index.html", html);
        // })
    })


const API = {
    getUsername(userData) {
        const queryUrl = `https://api.github.com/users/${userData}`;
        return axios.get(queryUrl)
        .catch (function(err) {
            console.log(err);
        })
        }
};


          


    // .then(function ({ username }) {
        //             console.log(username);
        //             const queryUrl = `https://api.github.com/users/${username}`;
        //             return axios.get(queryUrl).then(function (response) {
        //                 console.log(response.data.login);
        //                 // const userLogin = result.login;
        //                 // console.log(userLogin);



    //     var filename = data.color + ".html";
    //     var colour = data.color[0];

    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

    //         if (err) {
    //             return console.log(err);
    //         }

    //     });

    //     if (data.color[0] === "green") {
    //         console.log("you chose green");
    //         fs.readFile('./index.html', 'utf8', function (err, data) {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             var toPrepand = "<body><h1>hello world</h1></body>";
    //             var result = data.replace(/\<style>/g, toPrepand + '<style>');

    //             fs.writeFile('./index.html', result, 'utf8', function (err) {
    //                 if (err) return console.log(err);
    //             });
    //         });


    //     }
    //     else if (data.color[0] === "blue") {
    //         console.log("you chose blue");

    //     }
    //     else if (data.color[0] === "pink") {
    //         console.log("you chose pink");

    //     }
    //     else if (data.color[0] === "red") {
    //         console.log("you chose red");

    //     }

    //     inquirer
    //         .prompt({
    //             message: "Enter your GitHub username:",
    //             name: "username"
    //         })
    //         .then(function ({ username }) {
    //             console.log(username);
    //             const queryUrl = `https://api.github.com/users/${username}`;
    //             return axios.get(queryUrl).then(function (response) {
    //                 console.log(response.data.login);
    //                 // const userLogin = result.login;
    //                 // console.log(userLogin);




    //             });


    //         });
    // });







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
