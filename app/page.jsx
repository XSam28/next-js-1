import "@/app/globals.css";
import PageHome from "@/components/Home/Home";
import PH from "@/components/Home/PH";

export default function Home() {
  return (
    <div className="flex">
      <PageHome />
      <PH />
    </div>
  );
}
