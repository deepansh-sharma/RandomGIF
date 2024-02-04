import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  // Get a random gif when the component mounts

  async function getRandomGif(tag) {
    try {
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const img = data.data.images.downsized_medium.url;
      console.log(data.data.images.downsized_medium.url);
      setGif(img);
      setLoading(false);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  useEffect(() => {
    getRandomGif(tag);
  }, []);

  return { gif, loading, fetchData: getRandomGif };
};
export default useGif;
