import ReverseBtn from "./ReverseBtn";

const Destination = () => {
  return (
    <div className="hero">
      <div className="text-center">
        <div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h4 className="text-[#90b956] font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
              DESTINATION
            </h4>
            <h1 className="relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2.5rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5">
              Your Desired Destination
            </h1>
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
              alt=""
            />
            <div className="relative flex gap-6 mt-20 flex-wrap justify-center items-center lg:px-24">
              <div className="group relative flex flex-col justify-center items-center lg:w-[16%] w-full">
                <img
                  src="https://astrip-react.vercel.app/assets/images/bg/destnation11.png "
                  alt=""
                />
                <div className="DestinationText group-hover:after:bg-[#90b956] absolute bottom-10 text-white">
                  <p className="text-[1.5rem] font-[500]">
                    <a href="">Wiesbaden Sea</a>{" "}
                  </p>
                  <p className="group-hover:block group-hover:text-[#90b956] text-[1.2rem] font-[500] hidden">
                    40 Tours Place
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col justify-center items-center w-full lg:w-[16%]">
                <img
                  src="https://astrip-react.vercel.app/assets/images/bg/destnation12.png "
                  alt=""
                />
                <div className="DestinationText group-hover:after:bg-[#90b956] absolute bottom-10 text-white">
                  <p className="text-[1.5rem] font-[500]">
                    <a href="">California City</a>{" "}
                  </p>
                  <p className="group-hover:block group-hover:text-[#90b956] text-[1.2rem] font-[500] hidden">
                    20 Tours Place
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col justify-center items-center lg:w-[25.9%] w-full">
                <img
                  src="https://astrip-react.vercel.app/assets/images/bg/destnation13.png"
                  alt=""
                />
                <div className="DestinationText group-hover:after:bg-[#90b956] absolute bottom-10 text-white">
                  <p className="text-[1.5rem] font-[500]">
                    <a href="">Grand Switzerland</a>
                  </p>
                  <p className="group-hover:block group-hover:text-[#90b956] text-[1.2rem] font-[500] hidden">
                    50 Tours Place
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col justify-center items-center w-full lg:w-[16%]">
                <img
                  src="https://astrip-react.vercel.app/assets/images/bg/destnation14.png"
                  alt=""
                />
                <div className="DestinationText group-hover:after:bg-[#90b956] absolute bottom-10 text-white">
                  <p className="text-[1.5rem] font-[500]">
                    <a href="">Beauty of France</a>
                  </p>
                  <p className="group-hover:block group-hover:text-[#90b956] text-[1.2rem] font-[500] hidden">
                    30 Tours Place
                  </p>
                </div>
              </div>
              <div className="group relative flex flex-col justify-center items-center w-full lg:w-[16%]">
                <img
                  src="https://astrip-react.vercel.app/assets/images/bg/destnation15.png"
                  alt=""
                />
                <div className="DestinationText group-hover:after:bg-[#90b956] absolute bottom-10 text-white">
                  <p className="text-[1.5rem] font-[500]">
                    <a href="">Beauty of France</a>
                  </p>
                  <p className="group-hover:block group-hover:text-[#90b956] text-[1.2rem] font-[500] hidden">
                    30 Tours Place
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* <button className="btn HeaderBtn my-16">All Destination</button> */}
              <ReverseBtn text={"All Destination"} margin={"my-16"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
