const Seller = require("../model/sellerModel");

const createSeller = async (req, res) => {
  try {
    const seller = new Seller(req.body);
    await seller.validate();
    await seller.save();
    res.status(201).json(seller);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      for (const field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      res.status(400).json({ errors });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSeller,
  getSellers,
};
