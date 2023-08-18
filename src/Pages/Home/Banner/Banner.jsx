import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <section className="relative">
        <img src={banner} alt="banner" className="rounded-xl" />
        <h1 className="absolute text-6xl font-bold text-center mx-44 bottom-16">
          Are you on <br /> <span className="text-red-600">The Dark Side</span>{" "}
          or <span className="text-blue-600">The Light Side</span>
        </h1>
      </section>
    </div>
  );
};

export default Banner;
