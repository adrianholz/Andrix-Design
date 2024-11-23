import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
      <Header />
      <main>
        <h1>Home</h1>
      </main>
      <Footer />
      <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
    </>
  );
}
