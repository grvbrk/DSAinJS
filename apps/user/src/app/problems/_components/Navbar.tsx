"use client";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <>
      <div className="flex w-1/2 mx-8 my-4 ">
        <Button variant="link" className="hover:no-underline" asChild>
          <div>
            <Sidebar />
          </div>
        </Button>
        <Button variant="link">Approaches</Button>
        <Button variant="link">Optimal Solution</Button>
        <Button variant="link">Submissions</Button>
      </div>
    </>
  );
}
