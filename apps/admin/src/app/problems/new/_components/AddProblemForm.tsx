"use client";

import { AddProblem } from "@/actions/problems";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { CirclePlus, X } from "lucide-react";

type TestCase = {
  input: string;
  output: string;
};

type TestCaseField = keyof TestCase;

export default function AddProblemForm({ product }: { product?: any }) {
  const [testCases, setTestCases] = useState<TestCase[]>([
    { input: "", output: "" },
  ]);

  function handleTestCaseChange(
    idx: number,
    field: TestCaseField,
    value: string
  ) {
    const updatedTestCases = [...testCases];
    updatedTestCases[idx][field] = value;
    setTestCases(updatedTestCases);
  }

  function addTestCase() {
    setTestCases([...testCases, { input: "", output: "" }]);
  }

  function removeTestCase(idx: number) {
    setTestCases(testCases.filter((_, i) => i !== idx));
  }

  return (
    <form action={AddProblem} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Problem Name</Label>
        <Input type="text" id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Problem Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div className="space-y-2">
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
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
