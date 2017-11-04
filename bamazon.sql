CREATE TABLE products (
 item_id INTEGER(255) NOT NULL,
 product_name VARCHAR(1000) NOT NULL,
 department_name VARCHAR(100) NOT NULL,
 price FLOAT(50),
 stock_quantity INTEGER(50),
 PRIMARY KEY(item_id)
);

Select * From products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (54321, "Lotion", "Cosmetics", 6.50, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12345, "Television", "Entertainment", 1000.00, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (67890, "Amazon Echo", "Entertainment", 50.00, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (67899, "Headphones", "Entertainment", 50.00, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12367, "Sugar", "Food and Beverage", 4.00, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12368, "Cookies", "Food and Beverage", 3.50, 600);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12369, "Oatmeal", "Food and Beverage", 5.50, 700);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12379, "Banana", "Food and Beverage", 0.19, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (32579, "Picture Frame", "Hardware", 5.50, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (31689, "Drone", "Entertainment", 1550, 50);