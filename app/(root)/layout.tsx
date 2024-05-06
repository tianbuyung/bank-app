import Sidebar from "@/components/customs/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Septian",
    lastName: "Maulana",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
