const MainButton = ({ width, text, margin }) => {
  return (
    <button
      className={`btnContainer relative text-white bg-[#90b956] border-none rounded-none px-10 py-3 font-[500] text-[18px] ${width} ${margin}`}
    >
      <div className="overlay absolute bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-white text-[#90b956] flex justify-center items-center border-2 border-[#90b956]">
        {/* <div class="text">Hello World</div> */}
        {text}
      </div>
      {text}
    </button>
  );
};

export default MainButton;
