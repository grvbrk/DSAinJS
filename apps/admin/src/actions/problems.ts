"use server";

import { redirect } from "next/navigation";
import { findUser } from "./users";
import { getServerSession } from "next-auth";
import { connectDB } from "@repo/db/connection";
import { pool } from "@repo/db";

export async function AddProblem(formData: FormData) {
  const session = await getServerSession();
  const data = Object.fromEntries(formData.entries());
  const testcases = [];

  for (let key in data) {
    if (key.startsWith("input")) {
      const id = Number(key.split("-")[1]);
      testcases.push({
        input: data[key],
        output: data[`output-${id}`],
      });
      delete data[key];
    }
    if (key.startsWith("output")) {
      delete data[key];
    }
  }

  console.log(session);

  // try {
  //   connectDB();
  //   await pool.query(
  //     `
  //     INSERT INTO testcase (description, solution, userId, problemId)
  //     VALUES ($1, $2, $3, $4)
  //   `,
  //     [testcases[0].input, testcases[0].output, session?.user?.id]
  //   );
  //   console.log("Testcase added successfully!");
  // } catch (error) {
  //   console.log("Error writing testcases to DB");
  // }

  // redirect("/problems");
}
