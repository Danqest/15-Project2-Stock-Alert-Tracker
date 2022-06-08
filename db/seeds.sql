INSERT INTO alerts (id, user, ticker, buysell, shares, bidask, price, openclose, opentime, closetime, pnl)
VALUES  (1, "@testuser1", "AAPL", 1, 200, 150.00, 145.00, 1, "10:00:00", "13:00:00", null),
        (2, "@testuser1", "TSLA", 1, 1000, 700.00, 550.00, 1, "14:00:00", "14:00:00", null),
        (3, "@testuser2", "AMZN", 0, 2000, 1500.00, 1450.00, 0, "10:00:00", "12:00:00", null)