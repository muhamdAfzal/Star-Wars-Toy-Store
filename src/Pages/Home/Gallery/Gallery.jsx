import r2d2 from "../../../assets/r2d2.png";
import vader from "../../../assets/darth vader.png";
import trooper from "../../../assets/storm trooper.png";

const Gallery = () => {
  return (
    <div className="my-10">
      <h3 className="text-5xl font-semibold text-center mb-12">
        Choose the toys from your side!!!
      </h3>
      <div className="grid grid-flow-col grid-cols-3 gap-6">
        <img src={r2d2} alt="" className="my-10 shadow-2xl rounded-2xl p-3" />
        <img
          src={trooper}
          alt=""
          className="h-full shadow-2xl rounded-2xl p-5"
        />
        <img src={vader} alt="" className="my-10 shadow-2xl rounded-2xl p-3" />
      </div>
    </div>
  );
};

export default Gallery;
