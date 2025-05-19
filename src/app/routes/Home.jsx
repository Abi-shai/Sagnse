import HeroSection from "../components/HeroSection/HeroSection";
import HowTheyLookWithUs from "../components/howTheyLookWithUs/howTheyLookWithUs";
import SbsSection from "../components/sbsSection/sbsSection";
import WhoAreWe from "../components/whoAreWe/whoAreWe";
import InstagramSection from "../components/instagramSection/InstagramSection";

function Home() {

  return (
    <>
      <HeroSection />
      <SbsSection />
      <HowTheyLookWithUs />
      <WhoAreWe />
      <InstagramSection />
    </>
  )

}

export default Home;