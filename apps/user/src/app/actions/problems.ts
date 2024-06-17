"use server";

import { connectDB } from "@repo/db/connection";
import { pool } from "@repo/db";
import {
  ProblemArrayType,
  ProblemType,
  TestcaseType,
} from "@repo/common/types";
import { QueryResult } from "pg";

export async function getAllProblems() {
  connectDB();
  try {
    const problemsData = (await pool.query(
      `
        SELECT
        p.name,
        p.id AS problemId,
        t.id as testcaseId,
        p.description AS problemDescription,
        t.description as testcaseDescription,
        t.solution,
        p.isactiveforsubmission
        FROM testcases AS t
        JOIN problems AS p ON t.problemId = p.id
        `
    )) as QueryResult<ProblemArrayType>;
    const problems = problemsData?.rows;
    return problems;
  } catch (error) {
    console.log("ERROR FETCHING ALL PROBLEMS", error);
  }
}

export async function getProblemById(problemId: string) {
  connectDB();
  try {
    const problemsData = (await pool.query(
      `
        SELECT * FROM problems WHERE id = $1
      `,
      [problemId]
    )) as QueryResult<ProblemType>;

    const problem = problemsData?.rows[0];
    return problem;
  } catch (error) {
    console.log("ERROR FETCHING ONE PROBLEM", error);
  }
}

export async function getProblemByName(name: string) {
  connectDB();
  try {
    const problemData = (await pool.query(
      `
      SELECT * FROM problems WHERE name = $1
    `,
      [name]
    )) as QueryResult<ProblemType>;
    console.log(problemData);
    return problemData.rows[0];
  } catch (error) {
    console.log("ERROR FETCHING PROBLEM BY NAME ", error);
  }
}
