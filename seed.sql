DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2)
);

INSERT INTO users (name, email) VALUES
('Alice Meier', 'alice.meier@example.com'),
('Bob Schulz', 'bob.schulz@example.com'),
('Clara Hoffmann', 'clara.hoffmann@example.com'),
('David König', 'david.koenig@example.com'),
('Eva Braun', 'eva.braun@example.com'),
('Felix Lang', 'felix.lang@example.com'),
('Greta Müller', 'greta.mueller@example.com'),
('Hans Zimmer', 'hans.zimmer@example.com'),
('Ines Becker', 'ines.becker@example.com'),
('Jonas Weber', 'jonas.weber@example.com'),
('Klara Wolf', 'klara.wolf@example.com'),
('Lukas Richter', 'lukas.richter@example.com'),
('Maja Lehmann', 'maja.lehmann@example.com'),
('Nico Krüger', 'nico.krueger@example.com'),
('Olivia Brandt', 'olivia.brandt@example.com');

INSERT INTO products (name, price) VALUES
('Laptop Pro X', 1299.99),
('Smartphone Z Ultra', 799.49),
('Gaming Monitor 32"', 399.00),
('Bluetooth Kopfhörer', 149.95),
('Externe SSD 1TB', 109.90),
('USB-C Hub', 39.99),
('Mechanical Keyboard', 89.50),
('Wireless Mouse', 44.95),
('Ergonomischer Bürostuhl', 219.00),
('4K Webcam', 89.99),
('Notebook Cooling Pad', 29.90),
('Grafiktablet A5', 139.00),
('Streaming Mikrofon', 99.99),
('Ringlicht LED', 34.95),
('Dockingstation', 179.99),
('Tablet 10"', 349.90),
('Mini Beamer', 249.00),
('Smartwatch Sport', 199.50),
('Fitness Tracker', 79.99),
('E-Reader 6"', 119.00),
('Gaming Chair Deluxe', 289.00),
('Powerbank 20000mAh', 49.99),
('Smart Home Set', 299.00),
('Lautsprecher Bluetooth', 69.90),
('USB Stick 128GB', 24.99);

