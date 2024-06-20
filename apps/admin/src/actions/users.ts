"use server";

import { QueryResult } from "pg";
import { connectDB } from "@repo/db/connection";
import { pool } from "@repo/db";
import { UserType } from "@repo/common/types";
import { cache } from "react";

export const findUser = cache(async (email: string) => {
  try {
    connectDB();
    const userArray = (await pool.query(
      `
        SELECT * FROM users WHERE email = $1
      `,
      [email]
    )) as QueryResult<UserType>;
    return userArray?.rows[0];
  } catch (error) {
    return undefined;
  }
});

export const addUser = cache(async (email: string) => {
  try {
    connectDB();
    await pool.query(
      `
      INSERT INTO users (email)
      VALUES ($1)
    `,
      [email]
    );
  } catch (error) {
    console.log("Error adding user");
  }
});
