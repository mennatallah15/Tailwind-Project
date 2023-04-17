const Header = () => {
  return (
    <div className="MainHeader flex lg:justify-between md:justify-between mx-auto px-20 relative mb-[20px] lg:mb-28 py-20 top-30 max-[990px]:h-[50rem] overflow-hidden">
      <div className="md:mr-8 mt-[30px] py-10">
        <div className="mt-[15px] py-8 flex justify-center opacity-[0.5] max-[990px]:w-[10vw] max-[990px]:mt-20">
          <img
            src="https://astrip-react.vercel.app/assets/images/icons/cloud1.svg"
            alt=""
          />
        </div>
        <img
          className="lg:max-w-[230px] md:max-w-[230px] mt-[20px] max-[990px]:hidden"
          src="https://astrip-react.vercel.app/assets/images/bg/banner-image1.png"
          alt=""
        />
      </div>
      <div className="max-[990px]:bg-[#212529da] max-[990px]:w-[100%] max-[990px]:absolute overflow-hidden bottom-0 top-20 left-0 py-16">
        <div className="HeaderTitle text-center absolute xl:w-[40%] lg:w-[37%] max-[990px]:ml-[20px] min-[990px]:w-[40%] w-full px-4 inline-block h-[50vh] max-[990px]:top-[40%]">
          <div className="opacity-[0.5] mt-[20px] flex justify-center">
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/cloud2.svg"
              alt=""
            />
          </div>
          <div className="mt-[20px] flex flex-col justify-center items-center">
            <h4 className="text-[#90b956] font-sans text-[1.5rem] max-[550px]:text-[1rem] font-[400] tracking-[2px] mb-[10px]">
              LET'S FEEL A YACHT TRIP
            </h4>
            <h1 className="MainTitle relative xl:lg:md:text-[3.3rem] text-[#09100d] text-[2.5rem] max-[990px]:text-white mb-[25px] font-[800] leading-[1.5] font-['Merriweather']">
              The Best Way to Plan Your Trip Around The World
            </h1>
            <p className="text-[#5e5e5e] max-[990px]:text-white font-sans text-[1.5rem] max-[550px]:text-[1rem] font-[500] mb-[40px]">
              Treat yourself with a journey to your inner self.
            </p>
            <button className="HeaderBtn btn">
              <a href="" className="text-center text-[18px] normal-case">
                Discover More
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="md:ml-10 mt-10">
        <img
          className="lg:max-w-[30vw] md:min-[990px]:max-w-[350px] mt-20 max-[990px]:w-[200vw]"
          src="	https://astrip-react.vercel.app/assets/images/bg/banner-image2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
