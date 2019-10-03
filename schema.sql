CREATE database bamazon;
USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity),
VALUES ("Hedgehog Igloo","pets", 9.99, 20);

INSERT INTO bamazon (product, category,price)
VALUES ("Hedgehog Sleepingbag", "pets", 6.99, 15);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity),
VALUES ("Paper Bedding","pets", 25.99, 20);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity),
VALUES ("Meal Worms","pets", 6.99, 15);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity),
VALUES ("Catnip Mouse","pets", 2.99, 9);
