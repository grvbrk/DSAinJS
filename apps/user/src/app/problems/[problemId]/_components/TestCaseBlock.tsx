import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Testcase } from "@repo/common";
import { Check, TriangleAlert, X } from "lucide-react";

type TestCaseBlockType = {
  testcase: Testcase;
  status: string;
};

export default function TestCaseBlock({ testcase, status }: TestCaseBlockType) {
  return (
    <Card
      className={`${status === "AC" && "border border-green-600 "}  ${status === "NA" && "border border-red-600"} ${status === "TLE" && "border border-yellow-600"}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle
          className={`${status === "AC" && "text-green-600"} ${status === "NA" && "text-red-600"} ${status === "TLE" && "text-yellow-600"} text-sm font-medium`}
        >
          Testcase - {testcase.testcase_id}
        </CardTitle>
        {status === "AC" && <Check className="text-green-600 size-5" />}
        {status === "NA" && <X className="text-red-600 size-5" />}
        {status === "TLE" && (
          <TriangleAlert className="text-yellow-600 size-5" />
        )}
      </CardHeader>
      <Separator className="w-20 mx-6" />
      <CardContent className="pt-4">
        <p className="text-xs text-muted-foreground">
          {testcase.testcase_desc}
        </p>
        <p className="text-xs text-muted-foreground">
          Output: {testcase.testcase_solution}
        </p>
      </CardContent>
    </Card>
  );
}
