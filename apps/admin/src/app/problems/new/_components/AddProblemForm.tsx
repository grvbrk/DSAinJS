"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes, useState } from "react";
import { handleProblemFormData } from "@/actions/handleFormData";
import { ListType, TopicType } from "@repo/common/types";
import { DIFFICULTY } from "@/lib/constant";

type TestCase = {
  input: string;
  output: string;
};

// type TestCaseField = keyof TestCase;

type AddProblemPropsType = {
  lists: ListType[] | undefined;
  topics: TopicType[] | undefined;
};

export default function AddProblemForm({ lists, topics }: AddProblemPropsType) {
  // const [testCases, setTestCases] = useState<TestCase[]>([
  //   { input: "", output: "" },
  // ]);

  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedList, setSelectedList] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  // function handleTestCaseChange(
  //   idx: number,
  //   field: TestCaseField,
  //   value: string
  // ) {
  //   const updatedTestCases = [...testCases];
  //   updatedTestCases[idx][field] = value;
  //   setTestCases(updatedTestCases);
  // }

  // function addTestCase() {
  //   setTestCases([...testCases, { input: "", output: "" }]);
  // }

  // function removeTestCase(idx: number) {
  //   setTestCases(testCases.filter((_, i) => i !== idx));
  // }

  return (
    <form action={handleProblemFormData}>
      <div className="flex items-end gap-4 mb-2 md:flex md:items-end">
        <div className="md:w-full md:min-w-[100px]">
          <Label htmlFor="name">Problem Name</Label>
          <Input type="text" id="name" name="name" required />
        </div>
      </div>
      <div className="flex justify-between gap-4 md:justify-start">
        <Select onValueChange={setSelectedList} value={selectedList}>
          <SelectTrigger
            className="w-[180px]"
            disabled={lists?.length ? false : true}
          >
            <SelectValue placeholder="List" />
          </SelectTrigger>
          <SelectContent>
            {lists &&
              lists.map((list, idx) => {
                return (
                  <SelectItem key={idx} value={list.name}>
                    {list.name}
                  </SelectItem>
                );
              })}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedTopic} value={selectedTopic}>
          <SelectTrigger className="w-[180px]" disabled={topics ? false : true}>
            <SelectValue placeholder="Topics" />
          </SelectTrigger>
          <SelectContent>
            {topics &&
              topics.map((topic, idx) => {
                return (
                  <SelectItem key={`$topic-${idx}`} value={topic.name}>
                    {topic.name}
                  </SelectItem>
                );
              })}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedLevel} value={selectedLevel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            {DIFFICULTY.map((level, idx) => {
              return (
                <SelectItem key={idx} value={level}>
                  {level}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="description">Problem Description</Label>
        <Textarea id="description" name="description" required rows={8} />
      </div> */}

      {/* <div className="space-y-2">
        <Label htmlFor="Description">Testcases</Label>
        {testCases.map((testcase, idx) => {
          return (
            <div key={idx} className="flex gap-4 items-end">
              <div>
                <Label htmlFor={`input-${idx}`}>Input</Label>
                <Input
                  type="text"
                  id={`input-${idx}`}
                  name={`input-${idx}`}
                  value={testcase.input}
                  onChange={(e) =>
                    handleTestCaseChange(idx, "input", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor={`output-${idx}`}>Output</Label>
                <Input
                  type="text"
                  id={`output-${idx}`}
                  name={`output-${idx}`}
                  value={testcase.output}
                  onChange={(e) =>
                    handleTestCaseChange(idx, "output", e.target.value)
                  }
                  required
                />
              </div>
              <Button
                variant="ghost"
                className="hover:bg-transparent p-0"
                onClick={() => removeTestCase(idx)}
                disabled={testCases.length === 1}
              >
                <X className="mr-2" />
              </Button>
            </div>
          );
        })}

        <Button
          variant="ghost"
          className="hover:bg-transparent p-0"
          onClick={addTestCase}
          disabled={testCases.length === 5}
        >
          <CirclePlus className="mr-2" />
          Add Testcase
        </Button>
      </div> */}

      <SubmitButton className="mt-6" />
      <input type="hidden" name="difficulty" value={selectedLevel} />
      <input type="hidden" name="list" value={selectedList} />
      <input type="hidden" name="topics" value={selectedTopic} />
    </form>
  );
}

function SubmitButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
