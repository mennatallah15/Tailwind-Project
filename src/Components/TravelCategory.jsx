const TravelCategory = () => {
  return (
    <div>
      <div className="text-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-[#90b956] font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
              TRAVEL CATEGORY
            </h4>
            <h1 className="relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2.5rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5">
              Our Popular Tours Type
            </h1>
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
              alt=""
            />
            <div className="flex flex-wrap lg:gap-7 gap-4 my-20 justify-center items-center w-full px-20">
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/adventure.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  Adventure
                </div>
              </div>
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/city-tour.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  City Tour
                </div>
              </div>
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/sheep.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  Cruises Tour
                </div>
              </div>
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/wedding.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  Wedding
                </div>
              </div>
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/sea-tour.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  Sea Tour
                </div>
              </div>
              <div className="w-full xl:w-[14%] max-[880px]:min-[500px]:w-[40%] md:w-[25%] h-48 py-7 shadow-lg flex flex-col justify-center items-center group">
                <div className="mb-3 p-5 border-[1px] group-hover:border-transparent rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/travel.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.2rem] font-[650] cursor-pointer hover:text-[#90b956]">
                  Travel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCategory;
