-- Create a limited DB user for the currency converter app
-- Run this as root (or via MySQL Workbench connected as root)

CREATE USER IF NOT EXISTS 'converter'@'localhost' IDENTIFIED BY 'ChangeMeStrong!';
GRANT SELECT ON currency_converter.exchange_rates TO 'converter'@'localhost';
FLUSH PRIVILEGES;

-- After running this, update server/.env to use DB_USER=converter and DB_PASSWORD=ChangeMeStrong!
