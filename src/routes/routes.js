const router = require("express").Router();
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const authController = require("../controllers/authController");

router.post("/api/auth/signup", authController.signup);
router.post("/api/auth/signin", authController.signin);

router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAnAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

router.post("/", bookController.addBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getAnBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
