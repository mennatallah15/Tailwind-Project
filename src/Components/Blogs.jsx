const Blogs = () => {
  return (
    <div id="Blogs">
      <div className="mb-20">
        <div>
          <div className="flex flex-col justify-center items-center mt-10">
            <h4 className="text-[#90b956] font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
              BLOG & NEWS
            </h4>
            <h1 className="text-center relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2.5rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5">
              Get to Know Travel Experiences
            </h1>
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
              alt=""
            />
            <div className="relative flex gap-6 mt-20 flex-wrap justify-center items-center px-20">
              <div className="flex flex-col w-full lg:w-[32%]">
                <div className="group relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/blog/blog-grid1.png"
                    alt=""
                  />
                  <div className="absolute left-[20px] bottom-[20px] text-black bg-white py-[6px] px-[12px]">
                    <span className="text-[15px] font-[500]">
                      February 8, 2022
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-[600] lg:text-[1.5rem] text-[1.3rem] leading-[1.45] text-[#09100d] font-['Merriweather'] my-5">
                    The Social Art of Zaha Hadid, Architecture’s Engaging
                    Presence
                  </h4>
                  <a
                    href=""
                    className="relative BlogRead pb-[5px] font-[400] text-[17px] text-[#5e5e5e]"
                  >
                    Continue Reading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-6 inline-block ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-[32%]">
                <div className="group relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/blog/blog-grid2.png"
                    alt=""
                  />
                  <div className="absolute left-[20px] bottom-[20px] text-black bg-white py-[6px] px-[12px]">
                    <span className="text-[15px] font-[500]">
                      February 8, 2022
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-[600] lg:text-[1.5rem] text-[1.3rem] leading-[1.45] text-[#09100d] font-['Merriweather'] my-5">
                    Li River, China’s Orignial Postcard Landcaspe
                  </h4>
                  <a
                    href=""
                    className="relative BlogRead pb-[5px] font-[400] text-[17px] text-[#5e5e5e]"
                  >
                    Continue Reading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-6 inline-block ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-[32%]">
                <div className="group relative">
                  <img
                    src="https://astrip-react.vercel.app/assets/images/blog/blog-grid3.png"
                    alt=""
                  />
                  <div className="absolute left-[20px] bottom-[20px] text-black bg-white py-[6px] px-[12px]">
                    <span className="text-[15px] font-[500]">
                      February 5, 2022
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-[600] lg:text-[1.5rem] text-[1.3rem] leading-[1.45] text-[#09100d] font-['Merriweather'] my-5">
                    Jungles In Paris Vermont’s Rugged, Retro Ski Mountain
                  </h4>
                  <a
                    href=""
                    className="relative BlogRead pb-[5px] font-[400] text-[17px] text-[#5e5e5e]"
                  >
                    Continue Reading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-6 inline-block ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
