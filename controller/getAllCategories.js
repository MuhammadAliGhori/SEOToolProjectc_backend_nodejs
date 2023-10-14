const categoriesData = require("../data");

const getAllCategories = (req, res) => {
  const allCategories = Object.keys(categoriesData.categories);
  const categoriesWithSubcategories = [];

  allCategories.forEach((category) => {
    const categoryObject = {
      categoryName: category,
      subcategories: categoriesData.categories[category].subcategories,
    };
    categoriesWithSubcategories.push(categoryObject);
  });

  if (categoriesWithSubcategories.length > 0) {
    res.json(categoriesWithSubcategories);
    console.log("Success");
  } else {
    res.status(404).json({ error: "No categories found" });
  }
};

module.exports = {
  getAllCategories,
};
