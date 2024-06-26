-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = sarahgarson
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

--SELECT * FROM customers
--SELECT * FROM items

-- 1. All items, ordered by price (lowest to highest)

SELECT * FROM items
ORDER BY price ASC;

--2. Items with a price above 80 (80 included), ordered by price (highest to lowest)

SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

--3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results

SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 3;

--4. All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT last_name FROM customers
ORDER BY last_name DESC;









