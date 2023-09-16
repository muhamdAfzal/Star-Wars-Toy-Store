import babyYoda from "../../../assets/Baby Yoda Toy.png";
import stormtrooper from "../../../assets/Stormtrooper.png";

const MidSection = () => {
  return (
    <section>
      <container className="flex gap-32 px-36 mt-36">
        <img src={babyYoda} alt="" className="h-96" />
        <div className="mt-20">
          <h1 className="font-bold text-4xl">May The Force Be With You</h1>
          <hr className="my-5" />
          <p className="text-2xl font-semibold">
            We troopers are ready to deliver your favorite toys to your doorstep
          </p>
        </div>
      </container>
      <container className="flex gap-28 px-36 mt-36">
        <div className="mt-36">
          <h1 className="font-bold text-4xl">Easier To Get</h1>
          <hr className="my-5" />
          <p className="text-2xl font-semibold">
            Explore store, Select your toy and Order
          </p>
        </div>
        <img src={stormtrooper} alt="" className="w-96" />
      </container>
    </section>
  );
};

export default MidSection;
