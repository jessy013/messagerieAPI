/** importation de la configuration */
const dbConfig = require("../config/db.config.js");
/** importation de la librairie sequelize */
const Sequelize = require("sequelize");
/** création de la connexion à la base de données */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// importation de l'entité messagerie
db.messagerie = require("./messagerie.model.js")(sequelize, Sequelize);
module.exports = db;
