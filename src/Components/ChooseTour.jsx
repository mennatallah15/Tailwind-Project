import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ChooseTour = () => {
  return (
    <>
      <div className="hero">
        <div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[#90b956] font-sans text-[1.1rem] max-[550px]:text-[0.8rem] font-[400] tracking-[2px] mb-3">
                CHOOSE YOUR TOUR
              </h4>
              <h1 className="relative xl:lg:md:text-[2.7rem] text-[#09100d] text-[2rem] font-[700] leading-[1.5] font-['Merriweather'] mb-5 px-20">
                Get The Best Plans For Your’s
              </h1>
              <img
                src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
                alt=""
              />
              <div className="w-[87vw] my-2">
                <Carousel
                  className="py-16"
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 3,
                      partialVisibilityGutter: 40,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                      partialVisibilityGutter: 30,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 2,
                      partialVisibilityGutter: 30,
                    },
                  }}
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite={true}
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <div className="card xl:w-[27rem] lg:w-[21rem] max-[520px]:w-[19rem] max-[332px]:w-[15rem] border-[1px] hover:border-transparent hover:shadow-xl text-[#09100d] rounded-none">
                    <figure className="h-[250px] relative">
                      <img
                        src="https://astrip-react.vercel.app/assets/images/bg/best-plan21.png"
                        alt=""
                      />
                    </figure>
                    <div className="card-body flex flex-col justify-start py-10">
                      <p className="text-[#90b956] text-[1.3rem] font-[600]">
                        From $200
                      </p>
                      <h4>
                        <a
                          href=""
                          className="card-title text-[1.5rem] font-[600] font-['Merriweather'] leading-[1.4]"
                        >
                          Bangkok & Krabi Even Bette
                        </a>
                      </h4>
                      <div className="flex justify-between mt-3">
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-lime-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          2 days 3 night
                        </div>
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            className="text-lime-600"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                          </svg>
                          4.8 (150)
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-2 text-[1.3rem] font-[600] font-['Merriweather']">
                          Free Package Facility:
                        </h5>
                        <ul className="TourList text-[17px] text-[#5e5e5e] font-[400]">
                          <li className="relative mb-[5px] pl-5">
                            Free Best Tour Guided
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Free Messages
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            No Booking Charge
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Best Rate Gurantee
                          </li>
                        </ul>
                      </div>
                      <div className="card-actions mt-5">
                        <button className="btn HeaderBtn">Explore Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="card xl:w-[27rem] lg:w-[21rem] max-[520px]:w-[19rem] max-[332px]:w-[15rem] border-[1px] hover:border-transparent hover:shadow-xl text-[#09100d] rounded-none">
                    <figure className="h-[250px] relative">
                      <img
                        src="https://astrip-react.vercel.app/assets/images/bg/best-plan22.png"
                        alt=""
                      />
                    </figure>
                    <div className="card-body flex flex-col justify-start py-10">
                      <p className="text-[#90b956] text-[1.3rem] font-[600]">
                        From $300
                      </p>
                      <h4>
                        <a
                          href=""
                          className="card-title text-[1.5rem] font-[600] font-['Merriweather'] leading-[1.4]"
                        >
                          Caribbean Cooking Experien
                        </a>
                      </h4>
                      <div className="flex justify-between mt-3">
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-lime-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          2 days 3 night
                        </div>
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            className="text-lime-600"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                          </svg>
                          4.8 (150)
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-2 text-[1.3rem] font-[600] font-['Merriweather']">
                          Free Package Facility:
                        </h5>
                        <ul className="TourList text-[17px] text-[#5e5e5e] font-[400]">
                          <li className="relative mb-[5px] pl-5">
                            Free Best Tour Guided
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Free Messages
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            No Booking Charge
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Best Rate Gurantee
                          </li>
                        </ul>
                      </div>
                      <div className="card-actions mt-5">
                        <button className="btn HeaderBtn">Explore Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="card xl:w-[27rem] lg:w-[21rem] max-[520px]:w-[19rem] max-[332px]:w-[15rem] border-[1px] hover:border-transparent hover:shadow-xl text-[#09100d] rounded-none">
                    <figure className="h-[250px] relative">
                      <img
                        src="https://astrip-react.vercel.app/assets/images/bg/best-plan23.png"
                        alt=""
                      />
                    </figure>
                    <div className="card-body flex flex-col justify-start py-10">
                      <p className="text-[#90b956] text-[1.3rem] font-[600]">
                        From $350
                      </p>
                      <h4>
                        <a
                          href=""
                          className="card-title text-[1.5rem] font-[600] font-['Merriweather'] leading-[1.4]"
                        >
                          This Year Amazing Bangkok
                        </a>
                      </h4>
                      <div className="flex justify-between mt-3">
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-lime-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          2 days 3 night
                        </div>
                        <div className="flex gap-1 text-[16px] font-[700] text-[#5e5e5e]">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            className="text-lime-600"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                          </svg>
                          4.8 (150)
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-2 text-[1.3rem] font-[600] font-['Merriweather']">
                          Free Package Facility:
                        </h5>
                        <ul className="TourList text-[17px] text-[#5e5e5e] font-[400]">
                          <li className="relative mb-[5px] pl-5">
                            Free Best Tour Guided
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Free Messages
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            No Booking Charge
                          </li>
                          <li className="relative mb-[5px] pl-5">
                            Best Rate Gurantee
                          </li>
                        </ul>
                      </div>
                      <div className="card-actions mt-5">
                        <button className="btn HeaderBtn">Explore Now</button>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseTour;
