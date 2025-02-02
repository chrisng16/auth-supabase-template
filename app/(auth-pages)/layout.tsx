export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-md mx-auto min-h-[calc(100vh-7rem)] w-full flex flex-col items-center justify-center py-10 gap-1">
      {children}
    </div>
  );
}
