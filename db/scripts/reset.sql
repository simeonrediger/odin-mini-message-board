DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author TEXT,
  time timestamptz,
  content TEXT
);
