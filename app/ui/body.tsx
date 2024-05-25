export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full flex justify-center p-4">{children}</main>;
}
