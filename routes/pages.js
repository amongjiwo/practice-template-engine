const router = require("express").Router();
const page = require("../controllers/pagesController");

router.get("/", page.home);
router.get("/computers", page.computers);
router.get("/phones", page.phones);

module.exports = router;