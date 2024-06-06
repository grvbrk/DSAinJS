"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ProblemType = {
  problem_id: string;
  problem_title: string;
  problem_caution: string;
  problem_desc: string;
};

export type Testcase = {
  testcase_id: string;
  testcase_desc: string;
};

export type Problems = {
  id: string;
  problem: ProblemType;
  testcases: Testcase[];
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Problems>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "problem",
    header: ({ column }) => {
      return (
        <div className="flex items-center ">
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
    header: () => <div className="text-right">Testcase</div>,
    cell: (props) => {
      const testcase = props.row.getValue("testcases") as Testcase[];
      return <div className="text-right font-medium">{testcase.length}</div>;
    },
  },
];
