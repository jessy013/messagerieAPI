module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "messagerieDB",
    dialect: "mysql",
    pool: {
        max: 5, // max de connections
        min: 0, // minimun de connexions
        acquire: 30000, // délai avant expiration demande connexion
        idle: 10000 //délai avant expiration connexion
    }
};