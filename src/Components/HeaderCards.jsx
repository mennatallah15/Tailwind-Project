import { useState } from "react";
const options = [
  { value: "", text: "Destination" },
  { value: "egypt", text: "Egypt" },
  { value: "usa", text: "USA" },
  { value: "bali", text: "Bali" },
  { value: "turkey", text: "Turkey" },
  { value: "south africa", text: "South Africa" },
];

const HeaderCards = () => {
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div className="flex justify-center items-center text-center relative max-[990px]:bottom-10 bottom-28">
      <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow-lg w-[90%] rounded-none mb-10 bg-white text-black">
        <div className="stat flex justify-start align-middle items-center">
          <img
            src="https://astrip-react.vercel.app/assets/images/icons/form-location.svg"
            width="15px"
            height="15px"
            alt=""
          />
          {/* <div className="stat-value text-[15px] font-[500]">Destination</div> */}
          <select
            className="stat-value text-[15px] font-[500] select w-[97%] bg-white border-none rounded-none"
            value={selected}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>

        <div className="stat flex justify-start align-middle items-center">
          <img
            src="https://astrip-react.vercel.app/assets/images/icons/calendar.svg"
            width="15px"
            height="15px"
            alt=""
          />
          <select
            className="stat-value text-[15px] font-[500] select w-[97%] bg-white border-none rounded-none"
            value={selected}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>

        <div className="stat flex justify-start align-middle items-center">
          <img
            src="https://astrip-react.vercel.app/assets/images/icons/travelling.svg"
            width="15px"
            height="15px"
            alt=""
          />
          <select
            className="stat-value text-[15px] font-[500] select w-[97%] bg-white border-none rounded-none"
            value={selected}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value === "" ? "Type" : option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="stat">
          {/* <div className="stat-value text-[15px] font-[500]">Type</div> */}
          <button className="stat-value btn HeaderBtn text-[18px] font-[500] px-0">
            <a href="" className="normal-case">
              Find More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCards;
