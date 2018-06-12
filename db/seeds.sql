USE restaurants_db;

INSERT INTO restaurants (name, visited, liked) VALUES
("Espetus Churrascaria", true, true),
("Applebees", true, false),
("Clay Oven", true, true),
("Paul Martin's", true, false),
("Shabu House", false, false),
("Coconut Bay", false, false),
("Christie’s", false, true);

SELECT * FROM restaurants;