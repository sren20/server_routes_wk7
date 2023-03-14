// project instructions
// "/" displays welcome text
//  "/list" will display the data from the api table below
// https://swapi.dev/api/people
// need name, height, b-day, gender & url
//  "/" - error page - Page not found - if not "/" or "/list"

import { table } from "console"
import http from "http"
import fetch from "node-fetch"


const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>URL</th></tr>"
// "/" displays welcome text
    if (url === '/'){
        res.write("Welcome to My Home Page")
        res.end()
    }
//  "/list" will display the data from the api table below
// https://swapi.dev/api/people
else if(url === '/list'){
    fetch("https://swapi.dev/api/people")
            .then(res => res.json())
            .then(data => {
            // console.log(data);
             createData(data)
            // res.write('Welcome to My List Page')
            res.write(tableData)
            res.end()
        })   
}

// if(url === '/test'){
//     res.write("This is my test page")
//     res.end()
// }


//  "/" - error page - Page not found - if not "/" or "/list"
else {
    res.write("Page Not Found")
    res.end()
}

function createData(data){
    // let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>URL</th></tr>"

    Array.from(data).forEach(element => {
    // data.forEach(element => {
        tableData+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
    });
tableData+= `</table>`
}

   //  "/" - error page - Page not found - if not "/" or "/list"
    // else {
    //     res.write("Page Not Found")
    //     res.end()
    // }

}).listen(2060, console.log("Server is listening on port " + 2060));

