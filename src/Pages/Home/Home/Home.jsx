import banner from "../../../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner" className="rounded-xl" />
        <h1 className="absolute text-5xl left-1/2 mx-auto bottom-52">
          Are you on the Dark Side or the Light Side?
        </h1>
        <h3>Choose the toys from your side!!!</h3>
      </div>
    </div>
  );
};

export default Home;
