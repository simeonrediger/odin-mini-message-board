import pool from './pool.js';

export async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

export async function insertMessage({ author, content }) {
  await pool.query(
    `
    INSERT INTO messages
      (author, content)
    VALUES
      ($1, $2)
    `,
    [author, content],
  );
}
