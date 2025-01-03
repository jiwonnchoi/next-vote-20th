export default function VotingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-gradient-to-b from-white via-[#D2E6FD] to-white w-full mt-24 flex flex-col pt-16"
      style={{ height: "35.5rem" }}
    >
      {children}
    </div>
  );
}
