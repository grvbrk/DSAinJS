import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Problems, problemsArray } from "@repo/common";

async function getData(): Promise<Problems[]> {
  // Fetch data from your API here.
  return problemsArray;
}

export default async function ProblemsPage() {
  const data = await getData();
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
