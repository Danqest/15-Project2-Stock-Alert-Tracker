const Alert = require('../models/Alert');

const alertSeeds = [
  {
    "ticker": "AAPL",
    "entry": "LONG",
    "entry_price": 135.00,
    "target": 140.00,
    "stoploss": 130.00,
    "status":"OPEN",
    "closed_price": 0,
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "AMZN",
    "entry": "SHORT",
    "entry_price": 135.00,
    "target": 140.00,
    "stoploss": 130.00,
    "status":"OPEN",
    "closed_price": 0,
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "AMZN",
    "entry": "SHORT",
    "entry_price": 1335.00,
    "target": 1400.50,
    "stoploss": 1200.57,
    "profit_or_loss": 70,
    "closed_price": 1378,
    "status":"CLOSED",
    "user_id" : 1
  }
  
];

const seedAlerts = () => Alert.bulkCreate(alertSeeds);

module.exports = seedAlerts;