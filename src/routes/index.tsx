import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeedbackSection } from "@/components/site/FeedbackSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Footer } from "@/components/site/Footer";

const title = "Observatorio RD · Electricidad y agua potable";
const description =
  "Comparte cómo funciona el servicio de electricidad o agua potable en tu comunidad de República Dominicana y ayuda a identificar tendencias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <FeedbackSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
