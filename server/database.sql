CREATE DATABASE IF NOT EXISTS currency_converter;
USE currency_converter;

CREATE TABLE IF NOT EXISTS exchange_rates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    currency_code VARCHAR(3) NOT NULL,
    currency_name VARCHAR(50) NOT NULL,
    rate DECIMAL(10, 4) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert some sample exchange rates
INSERT INTO exchange_rates (currency_code, currency_name, rate) VALUES
('USD', 'US Dollar', 1.0000),
('EUR', 'Euro', 0.8500),
('GBP', 'British Pound', 0.7300),
('JPY', 'Japanese Yen', 110.0000),
('INR', 'Indian Rupee', 74.5000);