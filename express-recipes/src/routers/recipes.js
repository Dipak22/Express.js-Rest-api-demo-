const express = require("express");
const router = express.Router();

const { getAll, get, save, update, remove } = require("../controllers/recipes");

router.get("/", getAll);
router.post("/", save);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);

// Route `GET` and `POST` HTTP requests for `/`
//router.route('/').get(getAllRecipes).post(saveRecipe);

// Route `GET`, `PUT`, and `DELETE` HTTP requests for `api/v1/recipes/:id`
//router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

module.exports = router;