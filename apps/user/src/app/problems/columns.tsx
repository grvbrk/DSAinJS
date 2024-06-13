"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { ProblemType, Testcase, Problems } from "@repo/common";

export const columns: ColumnDef<Problems>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "problem",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <h1 className="cursor-default hover:bg-transparent">Problem</h1>
          <ArrowUpDown
            className="ml-2 h-3 w-3 cursor-pointer"
            onClick={() => {
              column.toggleSorting();
            }}
          />
        </div>
      );
    },
    cell: (props) => {
      const problem = props.row.getValue("problem") as ProblemType;
      return <h1>{problem.problem_title}</h1>;
    },
  },
  {
    accessorKey: "testcases",
    header: () => <div className="flex justify-center">Testcases</div>,
    cell: (props) => {
      const testcase = props.row.getValue("testcases") as Testcase[];
      return (
        <div className="flex justify-center font-medium">{testcase.length}</div>
      );
    },
  },
];
