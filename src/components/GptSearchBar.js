import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const langKey  = useSelector(store => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2  grid grid-cols-12 bg-black rounded-md">
        <input
          type="text"
          className="p-4 m-4 col-span-10 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
