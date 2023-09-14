import babyYoda from "../../../assets/Baby Yoda Toy.png";

const MidSection = () => {
  return (
    <section>
      <container className="flex gap-32 px-36 my-24 relative">
        <img src={babyYoda} alt="" className="h-96" />
        <div className="mt-20">
          <h1 className="font-bold text-4xl">May The Force Be With You</h1>
          <hr className="my-6" />
          <p className="text-2xl font-semibold">
            We troopers are ready to deliver your favorite toys to your doorstep
          </p>
        </div>
      </container>
    </section>
  );
};

export default MidSection;
