const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
exports.getCryptos = async (req, res, next) => {
  try {
    const cryptos = await Crypto.find()
      .sort({ createdAt: -1 })
      .limit(50);
    
    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
exports.getGainers = async (req, res, next) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } })
      .sort({ change24h: -1 })
      .limit(10);
    
    res.status(200).json({
      success: true,
      count: gainers.length,
      data: gainers
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
exports.getNewListings = async (req, res, next) => {
  try {
    const newListings = await Crypto.find({ isNew: true })
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.status(200).json({
      success: true,
      count: newListings.length,
      data: newListings
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new cryptocurrency
// @route   POST /api/crypto
// @access  Private
exports.createCrypto = async (req, res, next) => {
  try {
    const crypto = await Crypto.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Cryptocurrency created successfully',
      data: crypto
    });
  } catch (error) {
    next(error);
  }
};
