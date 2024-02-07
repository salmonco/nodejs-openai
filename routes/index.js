const router = require("express").Router();

router.use("/chat", require("./chat"));

module.exports = router;
