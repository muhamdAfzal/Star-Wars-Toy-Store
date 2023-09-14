import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ReactTab from "../../Home/Tab/ReactTab";
import MidSection from "../MidSection/MidSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ReactTab></ReactTab>
      <MidSection></MidSection>
    </div>
  );
};

export default Home;
