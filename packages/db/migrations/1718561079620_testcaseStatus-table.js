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
    CREATE TABLE testcasestatus (
      id serial PRIMARY KEY,
      status VARCHAR(40) NOT NULL DEFAULT 'IDLE' CHECK (status IN ('AC', 'NA', 'TLE', 'IDLE')),
      testcaseId INTEGER REFERENCES "testcases"(id) ON DELETE RESTRICT,
      submissionId INTEGER REFERENCES "submissions"(id) ON DELETE RESTRICT,
      userId INTEGER REFERENCES "users"(id) ON DELETE RESTRICT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`
      DROP TABLE testcasestatus
    `);
};
