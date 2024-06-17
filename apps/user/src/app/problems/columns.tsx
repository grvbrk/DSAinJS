"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, Code, X } from "lucide-react";
import { TestcaseType } from "@repo/common/types";
import { problemDataType } from "./page";

export const columns: ColumnDef<problemDataType>[] = [
  {
    accessorKey: "status",
    header: "status",
    cell: (props) => {
      const status = props.getValue();
      return (
        <div className="flex justify-start pl-2">
          {status === "AC" ? (
            <Check className="text-green-600" />
          ) : status === "NA" ? (
            <X className="text-red-600" />
          ) : (
            <Code className="text-muted-foreground size-5" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
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
      const problem = props.getValue() as string;
      return <h1 className="text-muted-foreground">{problem}</h1>;
    },
  },
  {
    accessorKey: "testcases",
    header: () => <div className="flex justify-center">Testcases Passed</div>,
    cell: (props) => {
      const testcase = props.getValue() as TestcaseType[];
      let testcasesPassed = 0;
      testcase.forEach((t) => {
        if (t.status === "pass") testcasesPassed += 1;
      });
      return (
        <div className="flex justify-center text-muted-foreground">{`${testcasesPassed}/${testcase.length}`}</div>
      );
    },
  },
];
