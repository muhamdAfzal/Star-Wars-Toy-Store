import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ReactTab from "../../Home/Tab/ReactTab";
import Rating from "../Rating/Rating";
import HeroMid from "../HeroMid/HeroMid";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Gallery></Gallery>
      <ReactTab></ReactTab>
      <HeroMid></HeroMid>
      <Rating></Rating>
    </div>
  );
};

export default Home;
