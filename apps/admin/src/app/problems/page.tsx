import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, MoreVertical } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function AdminProblemPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <Header>Problems</Header>
        <Button asChild>
          <Link href="/problems/new"> Add Problem </Link>
        </Button>
      </div>
      <ProblemsTable />
    </>
  );
}

async function ProblemsTable() {
  // Do a DB call to fetch all problems
  const products = [
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
      isActiveForSubmissions: true,
    },
    {
      id: "728ed52g",
      problem: {
        problem_id: "1",
        problem_title: "fibonacci series",
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
      isActiveForSubmissions: false,
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available for Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Concept</TableHead>
          <TableHead>Testcases</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell>
                {product.isActiveForSubmissions ? (
                  <>
                    <span className="sr-only">Available</span>
                    <CheckCircle2 />
                  </>
                ) : (
                  <>
                    <span className="sr-only ">Unavailable</span>
                    <XCircle className="stroke-destructive" />
                  </>
                )}
              </TableCell>
              <TableCell>{product.problem.problem_title}</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>{product.testcases.length}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a download href={`/problems/${product.id}/download`}>
                        Download
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/problems/${product.id}/edit`}>Edit</Link>
                    </DropdownMenuItem>
                    {/* <ActiveToggleDropDownItem
                      id={product.id}
                      isavailableforpurchase={product.isavailableforpurchase}
                    /> */}
                    <DropdownMenuSeparator />
                    {/* <DeleteDropDownItem
                      id={product.id}
                      disabled={NumberOfOrders?.rows[0].count > 0}
                      imagePath={product.imagepath}
                      filePath={product.filepath}
                    /> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
