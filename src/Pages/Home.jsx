import Hero1 from "../Components/Hero1";
import Hero2 from "../Components/Hero2";
import Hero3 from "../Components/Hero3";
import Navbar from "../Components/Navbar";
import Subnavbar from "../Components/Subnavbar";
import Testimonies from "../Components/Testimonies";
import Testimonies2 from "../Components/Testimonies2";

function Home() {
  return (
    <>
      <Navbar />
      <Subnavbar />
      <Hero1 />
      <Hero2 />
      <Testimonies />
      <Hero3 />
      <Testimonies2 />
    </>
  );
}

export default Home;
