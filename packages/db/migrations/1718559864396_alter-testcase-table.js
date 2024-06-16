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
      BEGIN;

      ALTER TABLE testcases
        DROP COLUMN status,
        DROP COLUMN userId,
        DROP COLUMN timeOfSubmission;


      COMMIT;
  `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`
    BEGIN;

    ALTER TABLE testcases
    ADD COLUMN status VARCHAR(40) NOT NULL DEFAULT 'IDLE' CHECK (status IN ('AC', 'NA', 'TLE', 'IDLE')),
    ADD COLUMN userId INTEGER REFERENCES "User"(id) ON DELETE CASCADE,

    COMMIT;
  `);
};
