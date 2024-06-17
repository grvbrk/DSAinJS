import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "./CodeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Code, NotebookText } from "lucide-react";
import TestCaseBlock from "./_components/TestCaseBlock";
import { getProblemByName } from "@/app/actions/problems";
import { getTestcases } from "@/app/actions/testcases";

export const dynamic = "force-dynamic";
export default async function page({
  params: { problemName },
}: {
  params: { problemName: string };
}) {
  const problem = await getProblemByName(problemName);
  const testcases = await getTestcases(problemName);
  const placeholderCode =
    "function pairProduct(numbers, targetProduct){\n\t// todo\n};";

  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={45} minSize={25}>
          <div className="h-full p-4">
            <Tabs defaultValue="problem">
              <TabsList className="flex justify-around w-full bg-transparent">
                <TabsTrigger
                  value="problem"
                  className="w-full data-[state=active]:bg-muted"
                >
                  <BookOpen />
                </TabsTrigger>
                <TabsTrigger
                  value="solution"
                  className="w-full data-[state=active]:bg-muted"
                >
                  <Code />
                </TabsTrigger>
                <TabsTrigger
                  value="submission"
                  className="w-full data-[state=active]:bg-muted"
                >
                  <NotebookText />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="problem">
                <Card>
                  <CardHeader>
                    <CardTitle className="pb-2">{problem?.name}</CardTitle>
                    <CardDescription>{problem?.description}</CardDescription>
                    {/* {problem.caution && (
                      <CardDescription>
                        NOTE: {problem.problem.problem_caution}
                      </CardDescription>
                    )} */}
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {testcases &&
                      testcases.map((testcase, index) => {
                        return (
                          <TestCaseBlock
                            key={testcase.id}
                            testcase={testcase}
                            index={index + 1}
                          />
                        );
                      })}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="solution">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="submission">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-1 bg-muted hover:bg-muted-foreground" />
        <ResizablePanel minSize={20}>
          <CodeEditor placeholderCode={placeholderCode} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
