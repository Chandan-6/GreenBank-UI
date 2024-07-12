import Hook from "@/components/Section/Hook";
import NavBar from "@/components/NavBar";
import Offer from "@/components/Section/Offer";
import Partners from "@/components/Section/Partners";
import Personalized from "@/components/Section/Personalized";
import TrendInfo from "@/components/Section/TrendInfo";
import PerfectCreditCard from "@/components/Section/PerfectCreditCard";
import Comments from "@/components/Section/Comments";
import Faq from "@/components/Section/Faq";
import Footer from "@/components/Section/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative bg-green-950/40 pt-5 px-16">
        <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-green-300 via-green-400 to-green-900 blur-3xl opacity-30 absolute -top-[700px] right-56"></div>

        {/* Navigation Bar */}
        <NavBar />

        {/* Hook - the main attractor */}
        <Hook />

        {/* Gives you the latest user liked values */}
        <TrendInfo />

        {/* The powerful trusted companies */}
        <Partners />

        {/* Offers they provide */}
        <Offer />

        {/* Create your customised credit card */}
        <Personalized />

        {/* Credit is for you */}
        <PerfectCreditCard />

        {/* The pulic comments that love the companies service/products */}
        <Comments />

        <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-green-300 via-green-400 to-green-900 blur-3xl opacity-30 fixed -bottom-[700px] -left-56"></div>

        {/* The FAQs */}
        <Faq />

      </main>
      <Footer />
    </>
  );
}
