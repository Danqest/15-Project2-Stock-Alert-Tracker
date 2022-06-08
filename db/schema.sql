-- DROP DATABASE
DROP DATABASE IF EXISTS stock_alert_tracker_db;

-- CREATE DATABASE
CREATE DATABASE stock_alert_tracker_db;

USE stock_alert_tracker_db;

CREATE TABLE alerts (
    id INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(30),
    ticker VARCHAR(5),
    buysell BOOLEAN,
    shares INT NOT NULL,
    bidask DECIMAL NOT NULL,
    price DECIMAL NOT NULL,
    openclose BOOLEAN,
    opentime TIME, 
    closetime TIME, 
    pnl DECIMAL,
    PRIMARY KEY (id)  

)
