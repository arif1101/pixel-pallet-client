import { AppSidebar } from "@/components/shared/AppSidebar";
// import Sidebar from "@/components/shared/Sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex gap-4">
    {/* <AppSidebar/> */}
      {children}
    </main>
  );
}