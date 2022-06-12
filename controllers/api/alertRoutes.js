const router = require('express').Router();
const { Comment, User, Alert, } = require('../../models');

// Routes for '/api/Alerts

// Routes for '/api/Alerts

// get all alert
router.get('/', (req, res) => {
  Alert.findAll({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// create an Alert
router.post('/', (req, res) => {
  Alert.create({
    ticker: req.body.ticker,
    entry: req.body.entry,
    entry_price: req.body.entry_price,
    target: req.body.target,
    stoploss: req.body.stoploss,
    current_price: req.body.current_price,
    status: req.body.status,
    // created_at: req.body.created_at,
    user_id: req.body.user_id, //requrire to include 

  })
    .then((results) => {
      res.json({
        message: 'Alert created successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific Alert/ Alert page
router.get('/:id', (req, res) => {
  Alert.findOne({
    where: {
      id: req.params.id,
    },
    
  })
    .then((results) => {
      // if no results, respond with 404 and inform user no results found for that ID
      if (!results) {
        res.status(404).json({
          message: `No Alert found with ID ${req.params.id} found. Please try again with a different ID.`,
        });
        return;
      }
      // else respond with results
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete an Alert by id
router.delete('/:id', (req, res) => {
  Alert.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((results) => {
      // if there are no results, set status to 404 and inform user that ID is not found
      if (!results) {
        res.status(404).json({
          message: `No Alert with Id ${req.params.id} found. Please try again with different ID.`,
        });
        return;
      }
      // else, respond with results
      res.json({ message: 'Alert deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update an Alert
router.put('/:id', (req, res) => {
  Alert.update(
    {
      closed_price: req.body.closed_price,
      status: req.body.status,
      profit_or_loss: req.body.profit_or_loss,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((results) => {
    res.json({
      message: 'Alert update successfully',
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;