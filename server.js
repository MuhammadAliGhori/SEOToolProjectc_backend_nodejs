const express = require("express");

const app = express();

const router = express.Router();

const mongoose = require("mongoose");

// seller
const sellerController = require("./controller/sellerController");

mongoose.connect(
  "mongodb+srv://seotool:seotool123@cluster0.lrgabox.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const categoriesController = require("./controller/categoriesController");

const AllCategoriesController = require("./controller/getAllCategories");

app.use(express.json());

app.get(
  "/categories/:category",
  categoriesController.getSubcategoriesByCategory
);

// all categories
app.get("/categories", AllCategoriesController.getAllCategories);

router.post("/sellers", sellerController.createSeller);
router.get("/sellers", sellerController.getSellers);

app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
