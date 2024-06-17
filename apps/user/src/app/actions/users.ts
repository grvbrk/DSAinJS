"use server";

import { QueryResult } from "pg";
import { connectDB } from "@repo/db/connection";
import { pool } from "@repo/db";
import { UserType } from "@repo/common/types";

export async function findUser(email: string) {
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
}

export async function addUser(email: string) {
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
}
