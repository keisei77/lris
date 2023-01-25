import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { FastAverageColor } from "fast-average-color";
const fac = new FastAverageColor();

const getFilename = (url: string) => {
  return url.split("/").slice(-1)[0].split(".")[0];
};

const defaultList = [
  "https://images.dog.ceo/breeds/airedale/n02096051_4516.jpg",
  "https://images.dog.ceo/breeds/dingo/n02115641_2440.jpg",
  "https://images.dog.ceo/breeds/eskimo/n02109961_17141.jpg",
  "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg",
  "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1631.jpg",
  "https://images.dog.ceo/breeds/whippet/n02091134_842.jpg",
  "https://images.dog.ceo/breeds/hound-ibizan/n02091244_5638.jpg",
  "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191103202017556_COVER.jpg",
  "https://images.dog.ceo/breeds/poodle-miniature/n02113712_587.jpg",
  "https://images.dog.ceo/breeds/newfoundland/n02111277_4710.jpg",
];

const Discovering = () => {
  const [list, setList] = useState(defaultList);

  const handleClick = () => {
    if (list.length > 1) {
      setList(list.slice(1));
    } else {
      setList(defaultList);
    }
  };

  const handleImageLoad = async (e: any) => {
    try {
      const color = await fac.getColorAsync(e.target);
      document.querySelector<HTMLDivElement>(
        `.blur-background--${getFilename(e.target.src)}`
      )!.style.backgroundColor = color.rgba;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      {list.map((url, index) => {
        return (
          <div
            style={{
              height: "calc(100% - 56px)",
              zIndex: 10 - index,
            }}
            className="absolute inset-0 flex items-center"
            onClick={handleClick}
            key={url}
          >
            <div
              className={`absolute -z-[1] h-full w-full blur-sm blur-background--${getFilename(
                url
              )}`}
            ></div>
            <img
              crossOrigin="anonymous"
              onLoad={handleImageLoad}
              className="w-full object-contain drop-shadow-xl"
              src={url}
              alt="dog"
            />
          </div>
        );
      })}
    </Card>
  );
};

export default Discovering;
