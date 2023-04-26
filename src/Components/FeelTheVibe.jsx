import MainButton from "./MainButton";

const FeelTheVibe = () => {
  return (
    <div className="ScrollingPhoto mb-10 lg:pt-[120px] lg:pb-[220px] md:py-[100px] py-[90px]">
      <div className="px-20 flex flex-wrap w-full lg:justify-between justify-center items-center">
        <div className="lg:w-[60%] w-full text-center lg:text-start">
          <h4 className="inline-block text-white font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
            FEEL THE VIBE
          </h4>
          <img
            className="inline-block ml-3"
            src="https://astrip-react.vercel.app/assets/images/icons/fly-shape1.svg"
            alt=""
          />
          <h1 className="relative xl:lg:md:text-[2.7rem] text-white text-[2.5rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5">
            Life Begins at The End of Your Comfort Zone.
          </h1>
          <p className="text-white font-sans text-[1.2rem] max-[550px]:text-[0.9rem] font-[400] mb-3">
            Lorem ipsum dolor sit amet, consectetur adi- piscing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim. Exercitation ullam laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          {/* <button className="btn mt-5">Discover More</button> */}
          <MainButton text={"Discover More"} margin={"mt-5"} />
        </div>
        <div className="mt-24 flex lg:justify-start justify-center items-center flex-col">
          <div className="relative w-10 h-10">
            <div className="absolute bg-white rounded-full opacity-75 animate-ping inline-flex w-full h-full"></div>
            <div className="relative w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className="text-[#90b956]"
              >
                <path d="M15.146 12.354l-5.792 5.792a.5.5 0 01-.854-.353V6.207a.5.5 0 01.854-.353l5.792 5.792a.5.5 0 010 .708z" />
              </svg>
            </div>
          </div>
          <div className="flex lg:mt-20 mt-8 justify-center items-center lg:-rotate-90">
            <div className=" text-white font-[500]">Watch Now</div>
            <div className="bg-white h-[2px] w-[50px] rounded  ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelTheVibe;
