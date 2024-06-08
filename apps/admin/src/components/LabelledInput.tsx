import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function LabelledInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Label htmlFor="input">{children}</Label>
      <Input type="number" id="input" name="input" required className="w-1/2" />
    </>
  );
}
