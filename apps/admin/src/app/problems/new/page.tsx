import { getAllLists } from "@/actions/lists";
import AddProblemForm from "./_components/AddProblemForm";
import { Separator } from "@/components/ui/separator";
import { getAllTopics } from "@/actions/topics";

export default async function NewProblemPage() {
  const listsPromise = getAllLists();
  const topicsPromise = getAllTopics();

  const [lists, topics] = await Promise.all([listsPromise, topicsPromise]);

  return (
    <>
      <div className="mb-4">
        <h3 className="text-lg font-medium">Problems</h3>
        <p className="text-sm ">
          Add a new problem. Minimum 1 and maximum 5 testcases allowed at
          present.
        </p>
      </div>
      <Separator className="mb-4" />
      <AddProblemForm
        lists={lists}
        topics={topics}
      />
    </>
  );
}
