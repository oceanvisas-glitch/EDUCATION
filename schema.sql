-- Database schema for SCI Foundation
CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE exams(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  score INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);