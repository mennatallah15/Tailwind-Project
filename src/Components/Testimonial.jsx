import Slider from "react-slick";
import "./Slick.css";
import "./Slick_theme.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="xl:px-20 px-10">
      <div className="flex justify-center items-center">
        <Slider
          {...settings}
          className="xl:w-[640px] w-[500px] max-[1015px]:w-[482px] max-[532px]:w-[400px] max-[445px]:w-[300px] mb-10 mt-40"
        >
          <div className="flex flex-col mb-5 bg-transparent">
            <div className="relative border-[1px] border-[hsl(0,8%,97%,.16)] py-[25px] px-[35px]">
              <div className="flex mb-4 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  height="1.4em"
                  width="1.4em"
                  className="text-[#90b956]"
                >
                  <path d="M378.1 154.8l153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2c-6.46-6.3-8.75-15.8-5.91-24.5 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28C270.4 5.249 278.7 0 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28zm-91 229.9c4.8 0 8.6.9 12.1 2.8l105.2 56.2-20.2-119.6c-1.3-7.7 1.3-15.6 6.8-21.1l85.9-85.1-118.3-17.4c-7.9-1.2-14.7-6.2-18.1-13.3L287.1 79.09V384.7z" />
                </svg>
              </div>
              <p className="font-[300] lg:text-[1.5rem] text-[1.2rem] text-white z-10 leading-[1.7]">
                “This place is great! I had a very pleasant stay here. Great
                stuff and beautiful suites with a fabulous view etiam rhoncus
                maecenas”!
              </p>
              <div className="w-12 h-12 absolute -bottom-6 ml-8 transform rotate-45 border-b-[1px] border-b-[hsl(0,8%,97%,.16)] border-r-[1px] border-r-[hsl(0,8%,97%,.16)] bg-[#09100d] z-0"></div>
            </div>
            <div className="flex mt-12 gap-3 relative left-12 text-white font-['Merriweather']">
              <img
                src="https://astrip-react.vercel.app/assets/images/bg/testi11.png"
                alt=""
              />
              <div className="ml-2">
                <h5 className="font-[500] text-[1.2rem]">Johan Martin Sr</h5>
                <p className="font-[400] text-[15px] text-[#cbcbcb] mt-2">
                  South America.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5 bg-[#09100d]">
            <div className="relative border-[1px] border-[hsl(0,8%,97%,.16)] py-[25px] px-[35px]">
              <div className="flex mb-4 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  height="1.4em"
                  width="1.4em"
                  className="text-[#90b956]"
                >
                  <path d="M378.1 154.8l153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2c-6.46-6.3-8.75-15.8-5.91-24.5 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28C270.4 5.249 278.7 0 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28zm-91 229.9c4.8 0 8.6.9 12.1 2.8l105.2 56.2-20.2-119.6c-1.3-7.7 1.3-15.6 6.8-21.1l85.9-85.1-118.3-17.4c-7.9-1.2-14.7-6.2-18.1-13.3L287.1 79.09V384.7z" />
                </svg>
              </div>
              <p className="font-[300] lg:text-[1.5rem] text-[1.2rem] text-white z-10 leading-[1.7]">
                “This place is great! I had a very pleasant stay here. Great
                stuff and beautiful suites with a fabulous view etiam rhoncus
                maecenas”!
              </p>
              <div className="w-12 h-12 absolute -bottom-6 ml-8 transform rotate-45 border-b-[1px] border-b-[hsl(0,8%,97%,.16)] border-r-[1px] border-r-[hsl(0,8%,97%,.16)] bg-[#09100d] z-0"></div>
            </div>
            <div className="flex mt-12 gap-3 relative left-12 text-white font-['Merriweather']">
              <img
                src="https://astrip-react.vercel.app/assets/images/bg/testi11.png"
                alt=""
              />
              <div className="ml-2">
                <h5 className="font-[500] text-[1.2rem]">Johan Martin Sr</h5>
                <p className="font-[400] text-[15px] text-[#cbcbcb] mt-2">
                  South America.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-5 bg-[#09100d]">
            <div className="relative border-[1px] border-[hsl(0,8%,97%,.16)] py-[25px] px-[35px]">
              <div className="flex mb-4 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#90b956]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  height="1.4em"
                  width="1.4em"
                  className="text-[#90b956]"
                >
                  <path d="M378.1 154.8l153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2c-6.46-6.3-8.75-15.8-5.91-24.5 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28C270.4 5.249 278.7 0 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28zm-91 229.9c4.8 0 8.6.9 12.1 2.8l105.2 56.2-20.2-119.6c-1.3-7.7 1.3-15.6 6.8-21.1l85.9-85.1-118.3-17.4c-7.9-1.2-14.7-6.2-18.1-13.3L287.1 79.09V384.7z" />
                </svg>
              </div>
              <p className="font-[300] lg:text-[1.5rem] text-[1.2rem] text-white z-10 leading-[1.7]">
                “This place is great! I had a very pleasant stay here. Great
                stuff and beautiful suites with a fabulous view etiam rhoncus
                maecenas”!
              </p>
              <div className="w-12 h-12 absolute -bottom-6 ml-8 transform rotate-45 border-b-[1px] border-b-[hsl(0,8%,97%,.16)] border-r-[1px] border-r-[hsl(0,8%,97%,.16)] bg-[#09100d] z-0"></div>
            </div>
            <div className="flex mt-12 gap-3 relative left-12 text-white font-['Merriweather']">
              <img
                src="https://astrip-react.vercel.app/assets/images/bg/testi12.png"
                alt=""
              />
              <div className="ml-2">
                <h5 className="font-[500] text-[1.2rem]">Johan Martin Sr</h5>
                <p className="font-[400] text-[15px] text-[#cbcbcb] mt-2">
                  South America.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
