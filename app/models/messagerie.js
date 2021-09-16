module.exports = (sequelize, Sequelize) => {
    const messagerie = sequelize.define("messagerie", {
        pseudo: {
            type: Sequelize.STRING
        },
        titre: {
            type: Sequelize.STRING
        },
        Text: {
            type: Sequelize.BOOLEAN
        }
    });
    return messagerie;
};