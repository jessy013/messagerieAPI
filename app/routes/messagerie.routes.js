export default app => {
    const messagerie = require("../controllers/messagerie.controller.js");
    var router = require("express").Router();
    // Create a new messagerie
    router.post("/", messagerie.create);
    // Retrieve all messagerie
    router.get("/", messagerie.findAll);
    // Retrieve a single messagerie with id
    router.get("/:id", messagerie.findOne);
    // Update a messagerie with id
    router.put("/:id", messagerie.update);
    // Delete a messagerie with id
    router.delete("/:id", messagerie.delete);
    // Delete all messagerie
    router.delete("/", messagerie.deleteAll);
    app.use('/api/messagerie', router);
};
