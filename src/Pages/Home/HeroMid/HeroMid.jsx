import babyYoda from "../../../assets/Baby Yoda Toy.png";
import stormTrooper from "../../../assets/Stormtrooper.png";
import c3po from "../../../assets/c3po.png";
const HeroMid = () => {
  return (
    <section>
      <container className="hero min-h-max pt-32 pb-24 bg-base-200">
        <div className="hero-content flex-col gap-32 max-w-5xl lg:flex-row">
          <img src={babyYoda} className="max-w-sm" />
          <div>
            <h1 className="text-5xl font-bold">May The Force Be With You!</h1>
            <hr className="mt-7" />
            <p className="py-6 text-2xl font-semibold">
              We troopers are always ready to deliver your favorite toys at your
              doorstep
            </p>
          </div>
        </div>
      </container>
      <container className="hero min-h-max pt-24 pb-24 bg-base-200">
        <div className="hero-content flex-col gap-32 max-w-5xl lg:flex-row-reverse">
          <img src={stormTrooper} className="max-w-sm" />
          <div>
            <h1 className="text-5xl font-bold">Rich Collection Of Toys!</h1>
            <hr className="mt-7" />
            <p className="py-6 text-2xl font-semibold">
              Choose among the vast collection of different toys
            </p>
          </div>
        </div>
      </container>
      <container className="hero min-h-max pt-14 pb-32 bg-base-200">
        <div className="hero-content flex-col gap-32 max-w-5xl lg:flex-row">
          <img src={c3po} className="max-w-xs" />
          <div>
            <h1 className="text-5xl font-bold">Easier To Get!</h1>
            <hr className="mt-7" />
            <p className="py-6 text-2xl font-semibold">
              Explore our store, Select your toy and Order
            </p>
          </div>
        </div>
      </container>
    </section>
  );
};

export default HeroMid;
