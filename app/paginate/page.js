const data = [
  "data 1",
  "data 2",
  "data 3",
  "data 4",
  "data 5",
  "data 6",
  "data 7",
  "data 8",
  "data 9",
  "data 10",
];
export default function Paginate({ searchParams }) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start - Number(per_page);
  const entries = data.slice(start, end);
  return (
    <div className="bg-white flex flex-col gap-5 items-center justify-center">
      {entries.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}
