import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { HeroSection } from "@/components/sections/hero";
import { StatisticsSection } from "@/components/sections/statistics";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorksSection } from "@/components/sections/how-it-works";

const InquirySection = dynamic(
  () => import("@/components/sections/inquiry").then((m) => m.InquirySection),
  { loading: () => <SectionSkeleton /> }
);

const ComplaintSection = dynamic(
  () => import("@/components/sections/complaint").then((m) => m.ComplaintSection),
  { loading: () => <SectionSkeleton tall /> }
);

const FaqSection = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FaqSection),
  { loading: () => <SectionSkeleton /> }
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials").then((m) => m.TestimonialsSection),
  { loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((m) => m.ContactSection),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`animate-pulse bg-slate-100 dark:bg-slate-900 ${tall ? "h-[600px]" : "h-96"}`}
      aria-hidden="true"
      role="presentation"
    />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <StatisticsSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <ComplaintSection />
        <InquirySection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
