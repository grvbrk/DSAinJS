"use server";

import { authOptions } from "@/lib/authOptions";
import { TestcaseType } from "@repo/common/types";
import { getServerSession } from "next-auth";
import { addTestcases } from "./testcases";
import { addProblem } from "./problems";
import { redirect } from "next/navigation";

export async function handleProblemFormData(formData: FormData) {
  const session = await getServerSession(authOptions);
  const data = Object.fromEntries(formData.entries());
  const testcases: Omit<TestcaseType, "id" | "status">[] = [];
  const difficultyLevel = data["difficulty"];
  const generalTopics = data["topics"];
  const neetcodeTopics = data["neetcodeTopics"];

  for (let key in data) {
    if (key.startsWith("input")) {
      const id = Number(key.split("-")[1]);
      testcases.push({
        description: String(data[key]),
        solution: String(data[`output-${id}`]),
      });
      delete data[key];
    }
    if (key.startsWith("output")) {
      delete data[key];
    }
  }

  console.log(formData)

  // const problem = await addProblem(String(data.name), String(data.description));
  // await addTestcases(testcases, problem?.id as string);

  console.log("TESTCASE AND PROBLEM ADDED TO DB");
  // redirect("/problems");
}

async function submitFormData() {}
