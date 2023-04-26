import Rating from "./Rating";
import ReverseBtn from "./ReverseBtn";

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
              <div className="group card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative overflow-hidden">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal11.png"
                    alt=""
                    className="ease-in-out duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-7 left-7 bg-white rounded-full p-1 hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      20%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white group-hover:bg-[#90b956] group-hover:text-white py-2 rounded-full w-9">
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
                  <h2 className="card-title text-[1.4rem] font-[500] cursor-pointer">
                    Aegean Adventure
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e] group-hover:text-[#90b956]">
                    From $290
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$480
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <ReverseBtn text={"Explore Now"} />
                  </div>
                </div>
              </div>
              <div className="group card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal12.png"
                    alt=""
                    className="ease-in-out duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-7 left-7 bg-white rounded-full p-1 hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      25%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9 transition duration-100 group-hover:bg-[#90b956] group-hover:text-white">
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
                  <h2 className="card-title text-[1.4rem] font-[500] cursor-pointer">
                    Tours Ethiopia!
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e] group-hover:text-[#90b956]">
                    From $499
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$850
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <ReverseBtn text={"Explore Now"} />
                  </div>
                </div>
              </div>
              <div className="group card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal13.png"
                    alt=""
                    className="ease-in-out duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-7 left-7 bg-white rounded-full p-1 hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      30%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9 group-hover:bg-[#90b956] group-hover:text-white">
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
                  <h2 className="card-title text-[1.4rem] font-[500] cursor-pointer">
                    Aegean Beach
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e] group-hover:text-[#90b956]">
                    From $499
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$850
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <ReverseBtn text={"Explore Now"} />
                  </div>
                </div>
              </div>
              <div className="group card lg:w-80 max-[520px]:w-[19rem] max-[332px]:w-[15rem] shadow-xl text-[#09100d] rounded-none">
                <figure className="h-[250px] relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/bg/deal14.png"
                    alt=""
                    className="ease-in-out duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-7 left-7 bg-white rounded-full p-1 hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0">
                    <div className="relative bg-white py-3 rounded-t-full w-20 text-[#90b956] font-sans text-[1.2rem] font-[500]">
                      50%
                    </div>
                    <div className="absolute top-0 -right-4 text-[#90b956] font-sans text-[0.9rem] font-[500] bg-white py-2 rounded-full w-9 group-hover:bg-[#90b956] group-hover:text-white">
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
                  <h2 className="card-title text-[1.4rem] font-[500] cursor-pointer">
                    South America
                  </h2>
                  <p className="text-[1.2rem] font-[500] text-[#5e5e5e] group-hover:text-[#90b956]">
                    From $549
                    <span className="text-[0.9rem] text-[#8e8c8c] line-through ml-2">
                      /$1099
                    </span>
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <ReverseBtn text={"Explore Now"} />
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
