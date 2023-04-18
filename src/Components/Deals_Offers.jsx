import Rating from "./Rating";

const Deals_Offers = () => {
  return (
    <div className="hero">
      <div className="text-center">
        <div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h4 className="text-[#90b956] font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
              DEALS & OFFER
            </h4>
            <h1 className="relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5 px-20">
              Astrip Amazing Deals!
            </h1>
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
              alt=""
            />
            <div className="flex gap-4 my-20 flex-wrap justify-center items-center lg:px-0">
              <div className="card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal11.png"
                    alt=""
                  />
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      20%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9">
                      off
                    </div>
                  </div>
                </figure>
                <div className="card-body flex flex-col justify-center items-center py-10">
                  <div className="flex items-center">
                    <Rating />
                    <span className="text-[0.9rem] font-[500] text-[#5e5e5e]">
                      (10 Review)
                    </span>
                  </div>
                  <h2 className="card-title text-[1.4rem] font-[500]">
                    Aegean Adventure
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e]">
                    From $290
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$480
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn HeaderBtn">Explore Now</button>
                  </div>
                </div>
              </div>
              <div className="card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal12.png"
                    alt=""
                  />
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      25%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9">
                      off
                    </div>
                  </div>
                </figure>
                <div className="card-body flex flex-col justify-center items-center py-10">
                  <div className="flex items-center">
                    <Rating />
                    <span className="text-[0.9rem] font-[500] text-[#5e5e5e]">
                      (12 Review)
                    </span>
                  </div>
                  <h2 className="card-title text-[1.4rem] font-[500]">
                    Tours Ethiopia!
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e]">
                    From $499
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$850
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn HeaderBtn">Explore Now</button>
                  </div>
                </div>
              </div>
              <div className="card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal13.png"
                    alt=""
                  />
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      30%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9">
                      off
                    </div>
                  </div>
                </figure>
                <div className="card-body flex flex-col justify-center items-center py-10">
                  <div className="flex items-center">
                    <Rating />
                    <span className="text-[0.9rem] font-[500] text-[#5e5e5e]">
                      (30 Review)
                    </span>
                  </div>
                  <h2 className="card-title text-[1.4rem] font-[500]">
                    Aegean Beach
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e]">
                    From $499
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$850
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn HeaderBtn">Explore Now</button>
                  </div>
                </div>
              </div>
              <div className="card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal14.png"
                    alt=""
                  />
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      50%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9">
                      off
                    </div>
                  </div>
                </figure>
                <div className="card-body flex flex-col justify-center items-center py-10">
                  <div className="flex items-center">
                    <Rating />
                    <span className="text-[0.9rem] font-[500] text-[#5e5e5e]">
                      (8 Review)
                    </span>
                  </div>
                  <h2 className="card-title text-[1.4rem] font-[500]">
                    South America
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e]">
                    From $549
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$1099
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <button className="btn HeaderBtn">Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals_Offers;
