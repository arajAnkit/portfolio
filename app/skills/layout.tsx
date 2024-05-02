import StarsCanvas from "./_components/star-bg";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
      <StarsCanvas />
      {children}
    </div>
  );
}
