import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <div className=" flex justify-between items-center h-20 bg-secondary-foreground">
        <Navbar />
      </div>
      <h1>Home page</h1>
    </>
  );
}
