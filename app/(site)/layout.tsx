import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
