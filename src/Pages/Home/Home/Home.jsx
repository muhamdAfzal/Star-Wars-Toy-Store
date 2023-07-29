import banner from "../../../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="banner" className="rounded-xl" />
        <h1 className="absolute text-6xl font-bold text-center mx-44 bottom-20">
          Are you on <br /> <span className="text-red-600">The Dark Side</span>{" "}
          or <span className="text-blue-600">The Light Side</span>
        </h1>
        <h3>Choose the toys from your side!!!</h3>
      </div>
    </div>
  );
};

export default Home;
