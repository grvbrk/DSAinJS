export type ProblemType = {
  id: string;
  name: string;
  description: string;
  isActiveForSubmission: boolean;
};

export type TestcaseType = {
  id: string;
  description: string;
  solution: string;
  status: string;
};

export type testcaseStatus = {
  id: string;
  status: string;
  testcaseId: string;
  submissionId: string;
  userId: string;
};

export type ProblemArrayType = {
  id: string;
  problem: ProblemType;
  placeholderCode: string;
  testcases: TestcaseType[];
  status: string;
};

export type UserType = {
  id: string;
  email: string;
};

export type TopicType = {
  name: string;
};

export type NeetcodeTopicType = {
  name: string;
};

export type ListType = {
  name: string;
};
