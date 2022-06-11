const Alert = require('../models/Alert');

const alertSeeds = [
  {
    "ticker": "AAPL",
    "entry": "Buy Long",
    "shares": 1000,
    "entry_price": 135.00,
    "current_price": 130.00,
    "start_time": "06/09/2022",
    "end_time": "06/10/2022",
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "AMZN",
    "entry": "Short Sell",
    "shares": 1000,
    "entry_price": 135.00,
    "current_price": 130.00,
    "start_time": "06/09/2022",
    "end_time": "06/10/2022",
    "profit_or_loss": 70,
    "user_id" : 1
  },
  {
    "ticker": "TSLA",
    "entry": "Buy Long",
    "shares": 1000,
    "entry_price": 1335.00,
    "current_price": 1335.00,
    "start_time": "06/09/2022",
    "end_time": "06/10/2022",
    "profit_or_loss": 70,
    "user_id" : 1
  },
  
];

const seedAlerts = () => Alert.bulkCreate(alertSeeds);

module.exports = seedAlerts;