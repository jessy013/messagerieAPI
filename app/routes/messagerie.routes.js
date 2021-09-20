module.exports = app => {
    const messages = require("../controllers/messagerie.controller.js");
    var router = require("express").Router();
    // Create a new message
    router.post("/", messagerie.create);
    // Retrieve all messages
    router.get("/", messagerie.findAll);
    // Retrieve a single message with id
    router.get("/:id", messagerie.findOne);
    // Update a message with id
    router.put("/:id", messagerie.update);
    // Delete a message with id
    router.delete("/:id", messagerie.delete);
    // Delete all messages
    router.delete("/", messagerie.deleteAll);
    app.use('/api/messagerie', router);
};
