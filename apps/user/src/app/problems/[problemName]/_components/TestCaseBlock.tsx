import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TestcaseType } from "@repo/common/types";
import { Check, TriangleAlert, X } from "lucide-react";

export default function TestCaseBlock({
  testcase,
  index,
}: {
  testcase: TestcaseType;
  index: number;
}) {
  return (
    <Card
      className={`${testcase.status === "AC" && "border border-green-600 "}  ${testcase.status === "NA" && "border border-red-600"} ${testcase.status === "TLE" && "border border-yellow-600"}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle
          className={`${testcase.status === "AC" && "text-green-600"} ${testcase.status === "NA" && "text-red-600"} ${testcase.status === "TLE" && "text-yellow-600"} text-sm font-medium`}
        >
          Testcase - {index}
        </CardTitle>
        {testcase.status === "AC" && (
          <Check className="text-green-600 size-5" />
        )}
        {testcase.status === "NA" && <X className="text-red-600 size-5" />}
        {testcase.status === "TLE" && (
          <TriangleAlert className="text-yellow-600 size-5" />
        )}
      </CardHeader>
      <Separator className="w-20 mx-6" />
      <CardContent className="pt-4">
        <p className="text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          {testcase.description}
        </p>
        <p className="text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          {`Output: ${testcase.solution}`}
        </p>
      </CardContent>
    </Card>
  );
}
