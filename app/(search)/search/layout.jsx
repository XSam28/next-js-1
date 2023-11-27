import Search from "./Search";

export const metadata = {
  title: "Search",
};

export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col bg-white py-10 selection:text-white overflow-hidden">
      <div className="w-screen overflow-hidden min-h-[75vh]">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
