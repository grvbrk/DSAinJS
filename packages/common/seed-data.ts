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
  isActiveForSubmission: boolean;
};

export const problemsArray: Problems[] = [
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
        testcase_desc: "sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1",
      },
      {
        testcase_id: "3",
        testcase_desc:
          "sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55",
      },
    ],
    isActiveForSubmission: true,
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
        testcase_desc: "sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1",
      },
      {
        testcase_id: "3",
        testcase_desc:
          "sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55",
      },
    ],
    isActiveForSubmission: false,
  },
  {
    id: "728ed52g",
    problem: {
      problem_id: "1",
      problem_title: "something series",
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
        testcase_desc: "sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1",
      },
      {
        testcase_id: "3",
        testcase_desc:
          "sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55",
      },
    ],
    isActiveForSubmission: true,
  },
];
