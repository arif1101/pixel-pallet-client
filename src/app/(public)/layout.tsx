import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import SubNav from "@/components/shared/Navbar/SubNav";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubNav/>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}