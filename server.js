const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("src"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>{
    console.log(`Server started at port ${PORT}`)
})
