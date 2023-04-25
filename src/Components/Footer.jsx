import CarouselPhoto from "./CarouselPhoto";

const Footer = () => {
  return (
    <>
      <CarouselPhoto />
      <div className="flex flex-col mx-auto px-20 bg-base-200 py-8 FooterImage">
        <footer className="flex gap-32 flex-wrap p-10">
          <div>
            <div className="w-64 relative p-[20px] bg-[hsla(0,0%,7%,.9)] rounded-full max-w-[280px] flex flex-col justify-center items-center overflow-hidden">
              <img
                className="absolute top-[40px] opacity-[.1]"
                src="https://astrip-react.vercel.app/assets/images/icons/footer-plane.svg"
                alt=""
              />
              <div className="absolute top-[32%] text-center">
                <img
                  className="max-w-[130px] w-full align-middle"
                  src="https://astrip-react.vercel.app/assets/images/icons/footer1-logo.svg"
                  alt=""
                />
                <p className="text-[16px] font-[400] text-[#90b956] mt-[10px]">
                  Since: 2022
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 400 400"
                className="FooterSvg"
              >
                <defs>
                  <path
                    d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                    id="txt-path"
                    fill="white"
                  ></path>
                </defs>
                <text
                  fill="#DDDDDD"
                  fontSize="35.5"
                  fontFamily="Helvetica Neue"
                  fontWeight="600"
                >
                  <textPath startOffset="0" xlinkHref="#txt-path">
                    Astrip Travel Agency &nbsp; Astrip Travel Agency
                  </textPath>
                </text>
              </svg>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col text-[#d7d3d3]">
            <span className="footer-title relative font-[500] normal-case text-[1.6rem] pb-[12px] font-['Merriweather'] opacity-100 mb-5">
              Information
            </span>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              About Company
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Online Query
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Become Partner
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Help & Support
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Contact Channels
            </a>
          </div>
          <div className="flex flex-col text-[#d7d3d3]">
            <span className="footer-title relative font-[500] normal-case text-[1.6rem] pb-[12px] font-['Merriweather'] opacity-100 mb-5">
              Destinations
            </span>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Grand Switzerland
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Beauty of Paris
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              United States
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Wiesbaden Sea
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px]">
              Bangladesh
            </a>
          </div>
          <div className="flex flex-col text-[#d7d3d3]">
            <span className="footer-title relative font-[500] normal-case text-[1.6rem] pb-[12px] font-['Merriweather'] opacity-100 mb-5">
              Reach Us
            </span>
            <a className="link link-hover text-[17px] font-[400] mb-[15px] flex">
              <div className="w-[30px] h-[30px] text-center border-[1px] border-[#90b956] rounded-full flex justify-center items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-[#90b956] w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-[6px]">+880 176 1111 456</p>
                <p className="mb-[6px]">+880 176 1111 457</p>
              </div>
            </a>
            <a className="link link-hover text-[17px] font-[400] mb-[15px] flex">
              <div className="w-[30px] h-[30px] text-center border-[1px] border-[#90b956] rounded-full flex justify-center items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-[#90b956] w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-[6px]">info@example.com</p>
                <p className="mb-[6px]">support@example.com</p>
              </div>
            </a>
            <a className="link link-hover text-[17px] font-[400] flex justify-center items-center">
              <div className="w-[30px] h-[30px] text-center border-[1px] border-[#90b956] rounded-full flex justify-center items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-[#90b956] w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-[6px]">168/170, Avenue 01, Mirpur DOHS, </p>
                <p className="mb-[6px]">Bangladesh</p>
              </div>
            </a>
          </div>
        </footer>
        <div className="flex items-center justify-center border-b-[1px] border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="hidden lg:flex items-center justify-center gap-4 mb-14">
            <span className="text-[1.4rem] text-white font-[500]">
              Stay Connected:
            </span>
            <a
              href="#"
              className="border-[1px] border-[#5e5e5e] text-neutral-600 dark:text-neutral-200 w-[30px] h-[30px] bg-[#0f1012] rounded-full flex justify-center items-center hover:bg-[#90b956]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              className="h-[30px] border-[1px] border-[#5e5e5e] text-neutral-600 dark:text-neutral-200 w-[30px] bg-[#0f1012] rounded-full flex justify-center items-center hover:bg-[#90b956]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              href="#"
              className="h-[30px] text-neutral-600 dark:text-neutral-200 w-[30px] bg-[#0f1012] rounded-full flex justify-center items-center border-[1px] border-[#5e5e5e] hover:bg-[#90b956]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <div className="flex gap-3 justify-center mb-14">
            <h4 className="text-[1.4rem] text-white font-[500] hidden lg:flex">
              Pay Safely With Us!
            </h4>
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/pay1.svg"
              alt=""
            />
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/pay2.svg"
              alt=""
            />
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/pay3.svg"
              alt=""
            />
            <img
              src="https://astrip-react.vercel.app/assets/images/icons/pay4.svg"
              alt=""
            />
          </div>
        </div>

        <footer className="footer items-center p-4 text-neutral-content">
          <div className="items-center grid-flow-col">
            <p className="text-[14px] font-[400] text-white ">
              Copyright 2022
              <a
                href="#"
                className="font-[500] text=[13px] ml-2 mr-1 text-[#90b956]"
              >
                Astrip
              </a>
              | Design By
              <a
                href="https://themeforest.net/category/site-templates?term=egenslab"
                className="ml-2 text-[#90b956]"
              >
                Egens Lab
              </a>
            </p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white text-[14px] font-[500]">
            <a>Privacy Policy</a>
            <a href="">| </a>
            <a>Terms of Use</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
