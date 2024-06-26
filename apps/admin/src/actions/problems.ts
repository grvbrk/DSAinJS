"use server";

import { connectDB } from "@repo/db/connection";
import { Problem, pool } from "@repo/db";
import { QueryResult } from "pg";
import { cache } from "react";

export const addProblem = cache(async (name: string, description: string) => {
  connectDB();
  try {
    const problemData = (await pool.query(
      `
      INSERT INTO problems(name, description)
      VALUES ($1, $2)
      RETURNING *
    `,
      [name, description]
    )) as QueryResult<Problem>;
    return problemData?.rows[0];
  } catch (error) {
    console.log("ERROR SUBMITTING PROBLEM TO DB", error);
  }
});

export const getAllProblems = cache(async () => {
  connectDB();
  try {
    const problemsData = (await pool.query(
      `
        SELECT * FROM problems
      `
    )) as QueryResult<Problem>;

    const problems = problemsData?.rows;
    return problems;
  } catch (error) {
    console.log("ERROR FETCHING ALL PROBLEMS");
  }
});
