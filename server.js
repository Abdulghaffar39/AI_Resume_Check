const express = require("express");
const fileUpload = require("express-fileupload");
const dbCon = require("./db/db.connection");
const router = require("./Router/route");
const routeTwo = require("./Router/routeTwo");
const routeJob = require("./Router/routeJob");
const cors = require("cors")
const path = require("path");



const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbCon();

app.get("/", (req, res) => {
    res.send("Backend is Working!");
});


app.use("/api", router)
app.use("/api", routeTwo)
app.use("/api", routeJob)

app.use(express.static(path.join(__dirname, "Public")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
