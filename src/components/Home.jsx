import Banner2 from "./Banner2.jsx";
import Contact2 from "./Contact2";
import ReadyToMove2 from "./Ready_To_Move2.jsx";
import GoogleMap2 from "./Google_Map2.jsx";
import DetailsContent from "./DetailsContent.jsx";
import SiteLayout2 from "./Site_Layout2.jsx";
import PropertyRates from "./PropertyRates.jsx";
import RouteMap from "./RouteMap.jsx";
import Ratings from "./Ratings.jsx";
import GalleryVideoHome from "./GalleryVideoHome.jsx";
import Testimonials from "./Testimonials.jsx";

function Home() {
  return (
    <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-80 font-merriweather">
      <Banner2 />
      <DetailsContent />
      <SiteLayout2 />
      <Ratings />
      <GalleryVideoHome />
      <PropertyRates />
      <GoogleMap2 />
      <RouteMap />
      <ReadyToMove2 />
      <Testimonials />
      <Contact2 />
    </div>
  );
}

export default Home;