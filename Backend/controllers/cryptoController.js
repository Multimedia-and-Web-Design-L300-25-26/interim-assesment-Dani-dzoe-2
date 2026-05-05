const Crypto = require("../models/Crypto");

// GET ALL
exports.getAllCrypto = async (req, res) => {
  const cryptos = await Crypto.find();
  res.json(cryptos);
};

// TOP GAINERS
exports.getTopGainers = async (req, res) => {
  const cryptos = await Crypto.find()
    .sort({ change24h: -1 })
    .limit(10);

  res.json(cryptos);
};

// NEW LISTINGS
exports.getNewListings = async (req, res) => {
  const cryptos = await Crypto.find()
    .sort({ createdAt: -1 })
    .limit(10);

  res.json(cryptos);
};

// CREATE
exports.createCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h } = req.body;

  try {
    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    res.status(201).json(crypto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
