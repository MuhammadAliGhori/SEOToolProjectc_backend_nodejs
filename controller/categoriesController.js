const categoriesData = require("../data");

const getSubcategoriesByCategory = (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();

  console.log("Requested category:", requestedCategory);
  console.log("Available categories:", Object.keys(categoriesData.categories));

  const categoryKeys = Object.keys(categoriesData.categories);

  const category = categoryKeys.find(
    (key) => key.toLowerCase() === requestedCategory
  );
  console.log("Requested category:", category);
  if (category) {
    res.json(categoriesData.categories[category].subcategories);
    console.log("Success");
  } else {
    res.status(404).json({ error: "Category not found" });
  }
};

module.exports = {
  getSubcategoriesByCategory,
};
