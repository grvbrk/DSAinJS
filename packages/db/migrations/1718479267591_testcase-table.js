/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE testcase (
      id serial PRIMARY KEY,
      status VARCHAR(40) NOT NULL DEFAULT 'IDLE' CHECK (status IN ('AC', 'NA', 'TLE', 'IDLE')),
      description VARCHAR(240) NOT NULL,
      solution VARCHAR(240) NOT NULL,
      userId INTEGER REFERENCES "User"(id) ON DELETE CASCADE,
      problemId INTEGER REFERENCES problem(id) ON DELETE RESTRICT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE testcase
  `);
};
