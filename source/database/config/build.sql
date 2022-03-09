BEGIN;

DROP TABLE IF EXISTS users,feedbacks  CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE feedbacks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content text NOT NULL,
  user_id INT  REFERENCES users(id)
);


INSERT INTO users (name) VALUES

('Adham Haisami'),
('Abdallah Ahmed'),
('Mohammed Abedelhadi'),
('Raghad Mezied'),
('Lina Ebid'),
('Abedalrahman Shamia'),
('Ahmed Qeshta'),
('Ayman Fahgan)'),
('Braa ferwana'),
('Emran Elmasri'),
('IBRAHIM ALHELOU'),
('Israa Rayya'),
('Jehad Abushaqra'),
('Karam Zomlut'),
('Maram Msabeh'),
('Mahmoud Alhato'),
('Manar Abedalhadi'),
('Mohamed Helles'),
('Mohammad AlHabil'),
('mostafa qanoo'),
('Nabil AbuShaban'),
('Nada Abuzaid'),
('Rawan Algharabli');

COMMIT;
