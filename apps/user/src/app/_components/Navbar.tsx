import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between mx-4 px-3">
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-golden">DSAinJS</h1>
        <div className="font-bold text-golden flex items-center gap-8">
          <Link href="/explore">Explore</Link>
          <Link href="/problems">Problems</Link>
        </div>
      </div>
      <Button asChild className="font-bold text-black bg-golden">
        <Link href="/login">Signup</Link>
      </Button>
    </nav>
  );
}
