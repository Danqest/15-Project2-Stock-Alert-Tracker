const Alert = require('../models/Alert');

const alertSeeds = [
  {
    "ticker": "AAPL",
    "entry": "Buy Long",
    "entry_price": 135.00,
    "current_price": 130.00,
    "status":"Open",
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "AMZN",
    "entry": "Short Sell",
    "entry_price": 135.00,
    "current_price": 130.00,
    "status":"Closed",
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "TSLA",
    "entry": "Buy Long",
    "entry_price": 1335.00,
    "current_price": 1335.00,
    "profit_or_loss": 70,
    "status":"Closed",
    "user_id" : 1
  },
  
];

const seedAlerts = () => Alert.bulkCreate(alertSeeds);

module.exports = seedAlerts;