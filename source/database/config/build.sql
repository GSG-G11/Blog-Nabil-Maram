BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content text NOT NULL,
  user_id INT FOREIGN KEY REFERENCES users(id)
);


INSERT INTO users (name, email, password) VALUES 
('admin', 'admin@admin.com', 'ADMIN'),
('user', 'user@user.com', 'USER');
('nabil', 'nabil.abushaban@gmail.com', '123456'),
('maram', 'maram@gmail.com', '123');



INSERT INTO posts (title, content, user_id) VALUES 
('fish', 'fish is delecious ', 1),
('fruits', 'fruit isnt eatable', 3);
('ego', 'nothinmg to be wwritten here', 2),
('chicken', 'I LOVE EATING chichen its healthy and i like it', 1);



COMMIT;