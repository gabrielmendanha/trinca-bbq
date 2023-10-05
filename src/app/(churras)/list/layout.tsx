import { Background } from "@/app/(churras)/list/styled";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      {children}
    </>
  );
}
