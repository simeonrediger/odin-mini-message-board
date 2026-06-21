import pool from './pool.js';

export async function findMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

export async function findMessageById(id) {
  const { rows } = await pool.query(
    `
    SELECT * FROM messages
    WHERE id = $1
    `,
    [id],
  );

  return rows[0];
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
