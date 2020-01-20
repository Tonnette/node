const fs = require('fs');
const generateHTML = require('./generateHTML');
const axios = require("axios");
convertFactory = require('electron-html-to');
const inquirer = require("inquirer");

const questions = [
    {
        type: "list",
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
];

// inquirer
//     .prompt(questions)
//     .then(({ color, username }) => {
//         API.getUsername(username)
//             .then(res => API.getGitHubStars(username)
//                 .then(stars => {
//                     console.log(stars);
//                     return generateHTML({
//                         totalStars, color, ...res.data
                       
//                     })

//                 })
//             )

//             .then((htmlData) => {
//                 // console.log(htmlData)
//                 var conversion = convertFactory({
//                     converterPath: convertFactory.converters.PDF

//                 });

//                 conversion({ html: htmlData }, function (err, result) {
//                     if (err) {
//                         return console.error(err);
//                     }
//                     // console.log(result.logs);
//                     result.stream.pipe(fs.createWriteStream('tonPDF.pdf'));
//                     console.log("success")
//                     conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
//                 });

//             })



//     })

inquirer
    .prompt(questions)
    .then( ({ color, username }) => {
        // console.log(color, username)

    

        API.getUsername(username)
            .then( res => API.getGitHubStars(username)
            .then(stars => { 
                console.log(stars);
                return generateHTML({ 
                    stars, color, ...res.data,  })
                    

            })
            )

            .then((htmlData) => {
                // console.log(htmlData)
                var conversion = convertFactory({
                    converterPath: convertFactory.converters.PDF

                });

                conversion({ html: htmlData }, function (err, result) {
                    if (err) {
                        return console.error(err);
                    }
                    // console.log(result.logs);
                    result.stream.pipe(fs.createWriteStream('tonPDF.pdf'));
                    console.log("success")
                    conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
                });

            })
            

    });

    const API =
{
    getUsername(userData) {
        const queryUrl = `https://api.github.com/users/${userData}`;
        return axios.get(queryUrl)
            
    },

    getGitHubStars(userData) {
       
        const StarsQueryUrl = `https://api.github.com/users/${userData}/repos?per_page=100`;
       return axios.get(StarsQueryUrl)
        .then(response => {
        // console.log("test");
        // console.log(response.data);
        // After getting user, count all their repository stars
        const starNums = response.data.map(function (repo) {
            // console.log(repo)                    
            return repo.stargazers_count;

                            })
            
                            var totalStars = eval(starNums.join('+'))
                            console.log(totalStars);
                            return totalStars;
        

      });
     }   
}


// const API =
// {
//     getUsername(userData) {
//         const queryUrl = `https://api.github.com/users/${userData}`;
//         return axios.get(queryUrl)

//     },

//     getGitHubStars(userData) {
//         const StarsQueryUrl = `https://api.github.com/users/${userData}/repos?per_page=100`;
//         axios.get(StarsQueryUrl)
//             .then((res) => {
//                 const starNums = res.data.map(function (repo) {
//                     repo.stargazers_count;
//                 })

//                 var totalStars = eval(starNums.join('+'))
//                 console.log(totalStars);

//             })

//     }
// };         