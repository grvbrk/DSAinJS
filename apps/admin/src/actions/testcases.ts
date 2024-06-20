import { TestcaseType } from "@repo/common/types";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import { cache } from "react";

export const addTestcases = cache(
  async (
    testcases: Omit<TestcaseType, "id" | "status">[],
    problemId: string
  ) => {
    connectDB();
    let promiseArray = [];
    for (let testcase of testcases) {
      promiseArray.push(addSingleTestcase(testcase, problemId));
    }
    await Promise.all(promiseArray);
  }
);

const addSingleTestcase = cache(
  async (
    { description, solution }: Omit<TestcaseType, "id" | "status">,
    problemId: string
  ) => {
    await pool.query(
      `
    INSERT INTO testcases(description, solution, problemId)
    VALUES ($1, $2, $3)
  `,
      [description, solution, problemId]
    );
  }
);
