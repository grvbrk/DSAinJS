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

    ALTER TABLE problem RENAME to problems;
    ALTER TABLE "User" RENAME to users;
    ALTER TABLE testcase RENAME to testcases;

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

    ALTER TABLE problems RENAME to problem;
    ALTER TABLE users RENAME to "User";
    ALTER TABLE testcases RENAME to testcase;

    COMMIT;

  `);
};
