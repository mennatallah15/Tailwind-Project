const ReverseBtn = ({ width, text, margin }) => {
  return (
    <button
      className={`btnContainer relative bg-white text-[#90b956] rounded-none px-10 py-2 font-[500] text-[16px] ${width} ${margin} border-2 border-[#90b956]`}
    >
      <div className="overlay absolute bottom-0 left-0 right-0 w-full h-full overflow-hidden text-white bg-[#90b956] flex justify-center items-center">
        {/* <div class="text">Hello World</div> */}
        {text}
      </div>
      {text}
    </button>
  );
};

export default ReverseBtn;
