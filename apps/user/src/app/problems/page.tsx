import { ProblemArrayType, TestcaseType } from "@repo/common/types";
import { getAllProblems } from "../actions/problems";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export type formatProblemArrayType = {
  name: string;
  problemid: string;
  testcaseid: string;
  problemdescription: string;
  testcasedescription: string;
  solution: string;
  isactiveforsubmission: boolean;
};

export type problemDataType = {
  id: string;
  name: string;
  description: string;
  isActiveForSubmission: boolean;
  testcases: TestcaseType;
  status: string;
  placeholderCode: string;
};

function formatProblemsData(problems: formatProblemArrayType[]) {
  const problemMap: Record<string, any> = {};

  for (let problem of problems) {
    if (!problemMap[problem.name]) {
      problemMap[problem.name] = {
        id: problem.problemid,
        name: problem.name,
        description: problem.problemdescription,
        isActiveForSubmission: problem.isactiveforsubmission,

        testcases: [],
      };
    }
    if (!problemMap[problem.name]["status"]) {
      problemMap[problem.name]["status"] = "idle";
    }
    if (!problemMap[problem.name]["placeholderCode"]) {
      problemMap[problem.name]["placeholderCode"] =
        "function pairProduct(numbers, targetProduct){\n\t// todo\n};";
    }

    problemMap[problem.name].testcases.push({
      id: problem.testcaseid,
      description: problem.testcasedescription,
      solution: problem.solution,
      status: "fail",
    });
  }

  return Object.values(problemMap);
}

export default async function ProblemsPage() {
  const problems = (await getAllProblems()) as formatProblemArrayType[];
  const formattedProblemsData = formatProblemsData(
    problems
  ) as problemDataType[];
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={formattedProblemsData} />
      </div>
    </>
  );
}
