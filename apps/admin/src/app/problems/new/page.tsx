import Header from "@/components/Header";
import AddProblemForm from "./_components/AddProblemForm";

export default function NewProblemPage() {
  return (
    <>
      <div className="mb-4">
        <Header>Add Problem</Header>
      </div>
      <AddProblemForm />
    </>
  );
}
