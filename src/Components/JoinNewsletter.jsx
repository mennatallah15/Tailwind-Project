import Testimonial from "./Testimonial";

const JoinNewsletter = () => {
  return (
    <div className="flex mb-20 mt-32 max-[990px]:flex-wrap">
      <div className="relative bg-[#09100d] lg:w-[58%] max-[990px]:w-full">
        <img
          className="absolute top-[10%] right-[11%] z-10"
          src="https://astrip-react.vercel.app/assets/images/icons/testi-quote.svg"
          alt=""
        />
        <div>
          <Testimonial />
        </div>
      </div>
      <div className="Newsletter flex justify-center items-center text-center lg:w-[42%] max-[990px]:w-full">
        <div className="NewsForm py-[45px] px-[30px] w-full max-w-[400px] text-white">
          <h3 className="font-[700] lg:text-[1.9rem] text-[1.6rem] mb-[15px] leading-[1.35] font-['Merriweather']">
            Join Newsletter
          </h3>
          <p className="font-[400] text-[17px] mb-10">
            Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
          </p>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="mb-6 bg-transparent block w-full border-[1.5px] border-[hsla(0,0%,87%,.431)] py-3 text-white text-start placeholder:text-center placeholder:text-white focus:border-[#90b956] sm:leading-6 p-5"
            />
            <input
              type="text"
              placeholder="Your E-mail"
              className="mb-6 bg-transparent block w-full border-[1.5px] border-[hsla(0,0%,87%,.431)] py-3 text-white text-start placeholder:text-center placeholder:text-white focus:border-[#90b956] sm:leading-6 p-5"
            />
            <button className="btn w-full normal-case font-[500] text-[18px] HeaderBtn">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinNewsletter;
