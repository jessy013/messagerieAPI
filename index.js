/**Importation des librairies */
const express = require("express");
const cors = require("cors");
const app = express();
/** protéger le web service */
var corsOptions = {
    origin: "http://localhost:3000"
};
const db = require("./app/models");
db.sequelize.sync(); db.sequelize.sync();

app.use(cors(corsOptions));
/**middleware */
// parser les requêtes: content-type - application/json
app.use(express.json());
// parser les requêtes: content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// routes
app.get("/", (req, res) => {
    res.json({ message: "bienvenue dans la messagerieAPI." });
});

// Configuration du serveur Web (choix du port)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});