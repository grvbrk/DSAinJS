import ProblemNavbar from "./_components/ProblemNavbar";

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProblemNavbar />
      {children}
    </>
  );
}
