import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./spinner";
export default function Tag() {
  const { gif, loading, fetchData } = useGif("cat");
  const [tag, setTag] = useState("cat");
  return (
    <div
      className="w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Generate {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif}></img>}
      <label>
        <input
          type="text"
          onChange={(e) => setTag(e.target.value)}
          className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
          value={tag}
        ></input>
      </label>

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
