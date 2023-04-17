const TravelCategory = () => {
  return (
    <div className="hero">
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
            <div className="flex gap-8 my-20 flex-wrap justify-center items-center">
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/adventure.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
                  Adventure
                </div>
              </div>
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/city-tour.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
                  City Tour
                </div>
              </div>
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/sheep.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
                  Cruises Tour
                </div>
              </div>
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/wedding.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
                  Wedding
                </div>
              </div>
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/sea-tour.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
                  Sea Tour
                </div>
              </div>
              <div className="px-10 py-7 shadow-lg flex flex-col justify-center items-center">
                <div className="mb-5 p-5 border-[1px] hover:border-0 rounded-full mx-auto">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/icons/travel.svg"
                    alt=""
                  />
                </div>
                <div className="text-[#09100d] text-[1.4rem] font-[500]">
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
