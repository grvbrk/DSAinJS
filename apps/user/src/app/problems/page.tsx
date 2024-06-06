import Navbar from "./_components/Navbar";
import CodeEditor from "./_components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Problems, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Problems[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      problem: {
        problem_id: "1",
        problem_title: "sum numbers recursive",
        problem_caution: "Watch the Approach video first!",
        problem_desc:
          "Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.",
      },

      status: "pending",
      testcases: [
        {
          testcase_id: "1",
          testcase_desc: "sumNumbersRecursive([5, 2, 9, 10]); // -> 26",
        },
        {
          testcase_id: "2",
          testcase_desc:
            "sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1",
        },
        {
          testcase_id: "3",
          testcase_desc:
            "sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55",
        },
      ],
    },
    {
      id: "728ed52g",
      problem: {
        problem_id: "1",
        problem_title: "sum numbers recursive",
        problem_caution: "Watch the Approach video first!",
        problem_desc:
          "Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.",
      },

      status: "pending",
      testcases: [
        {
          testcase_id: "1",
          testcase_desc: "sumNumbersRecursive([5, 2, 9, 10]); // -> 26",
        },
        {
          testcase_id: "2",
          testcase_desc:
            "sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1",
        },
        {
          testcase_id: "3",
          testcase_desc:
            "sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55",
        },
      ],
    },
  ];
}

export default async function ProblemsPage() {
  const data = await getData();
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      {/* <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <CodeEditor />
        </ResizablePanel> */}
      {/* <ResizableHandle /> */}
      {/* <ResizablePanel>
          <CodeEditor />
        </ResizablePanel> */}
      {/* </ResizablePanelGroup> */}
    </>
  );
}
