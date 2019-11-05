
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER(11) AUTO_INCREMENT NOT NULL, <--- Decimal
stock_quantity INTEGER(11) AUTO_INCREMENT NOT NULL,
primary key(id)

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Galaxy Yoga Pants", "Lululemon", "98.00", "5");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Black Thermal Yoga Pants", "Lululemon", "98.00", "8");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Galaxy Duffle Bag", "Lululemon", "70.00", "3");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Pink Yoga Mat", "Lululemon", "36.00", "10");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Blue Yoga Mat", "Lululemon", "36.00", "10");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Elastic Non-slip Headbands", "Lululemon", "15.00", "12");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Yoga Strap", "Lululemon", "20.00", "14");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Galaxy Yoga Bra", "Lululemon", "40.00", "6");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Black Yoga Bra", "Lululemon", "40.00", "8");

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quanity)
VALUES ("Yoga Towel", "Lululemon", "10.00", "18");
