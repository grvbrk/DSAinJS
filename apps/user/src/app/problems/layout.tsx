import { getAllTopics } from "../actions/topics";
import ProblemNavbar from "./_components/ProblemNavbar";

export default async function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topics = await getAllTopics();
  return (
    <>
      <ProblemNavbar topics={topics || []} />
      {children}
    </>
  );
}
