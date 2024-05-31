import Navbar from "./_components/Navbar";
import CodeEditor from "./_components/CodeEditor";
import Sidebar from "./_components/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ProblemsPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
