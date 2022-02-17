const router = require("express").Router();
const userController = require("../controllers/user.controller");

// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.user);   
router.put("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);
// router.patch("/follow/:id", userController.follow);
// router.patch("/unfollow/:id", userController.unfollow);

module.exports = router;