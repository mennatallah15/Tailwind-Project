import React from "react";

const AskForm = () => {
  return (
    <div className="flex justify-center items-center flex-col relative lg:bottom-36 bottom-20">
      <div className="lg:w-[57%] bg-[#FFF7F5] px-[40px] py-[45px] w-[90%]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2.5rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5">
            Feel Free To Ask
          </h1>
          <img
            src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
            alt=""
          />
        </div>
        <form className="pt-10 pb-5">
          <div className="space-y-12">
            <div className="pb-10">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      placeholder="Full Name"
                      className="bg-transparent block w-full border-[1.5px] border-gray-300 py-3 text-gray-900 placeholder:text-gray-500 focus:border-[#90b956] sm:leading-6 p-5"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="email"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      placeholder="Your E-mail"
                      className="p-5 bg-transparent block w-full border-[1.5px] border-gray-300 py-3 text-gray-900 placeholder:text-gray-500 focus:border-[#90b956] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div>
                <textarea
                  id="about"
                  name="about"
                  rows="5"
                  placeholder="Write your message here.."
                  className="p-5 bg-transparent block w-full border-[1.5px] border-gray-300 py-3 text-gray-900 placeholder:text-gray-500 focus:border-[#90b956] sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button className="btn">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskForm;
