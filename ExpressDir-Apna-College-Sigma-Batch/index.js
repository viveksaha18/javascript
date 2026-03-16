const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("Server is running.........")
})

// app.use((req, res) => {
//     console.log(typeof(res))
//     console.log("Running.......")
//     res.send("It is a basic response")
// })

app.get("/", (req, res) => {
    res.send("Root Path");
})

// app.get("/apple", (req, res) => {
//     res.send("Apple Path");
// })

// app.get("/mango", (req, res) => {
//     res.send("Mango Path and mango path");
// })

// app.use((req, res) => {
//     res.send("This path does not exist");
// })

// app.get("/:username", (req, res) => {
//     console.log(req.params.username);
//     res.send("Hi, I am "+ req.params.username);
// })

app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`query string ${q}`)
})