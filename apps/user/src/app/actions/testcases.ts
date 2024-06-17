import { QueryResult } from "pg";
import { TestcaseType } from "@repo/common/types";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import { getProblemByName } from "./problems";

export async function getTestcases(problemName: string) {
  const problem = await getProblemByName(problemName);
  connectDB();
  try {
    const testcaseData = (await pool.query(
      `
      SELECT * FROM testcases WHERE problemId = $1
    `,
      [problem?.id]
    )) as QueryResult<TestcaseType>;
    return testcaseData.rows;
  } catch (error) {
    console.log("ERROR FETCHING TESTCASES", error);
  }
}
