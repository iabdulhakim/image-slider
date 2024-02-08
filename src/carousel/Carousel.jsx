import { useState } from "react";

const images = [
  {
    id: 1,
    img: "/image.1.jpg",
    isIt: false,
  },
  {
    id: 2,
    img: "/image2.jpg",
    isIt: true,
  },
  {
    id: 3,
    img: "/image3.jpg",
    isIt: false,
  },
  {
    id: 4,
    img: "/image4.jpg",
    isIt: false,
  },
  {
    id: 5,
    img: "/image5.jpg",
    isIt: false,
  },
  {
    id: 6,
    img: "/image6.jpg",
    isIt: false,
  },
  {
    id: 7,
    img: "/image7.jpg",
    isIt: false,
  },
  {
    id: 8,
    img: "/image8.jpg",
    isIt: false,
  },
  {
    id: 9,
    img: "/image9.jpg",
    isIt: false,
  },
  {
    id: 10,
    img: "/image10.jpg",
    isIt: false,
  },
  {
    id: 11,
    img: "/image11.jpg",
    isIt: false,
  },
  {
    id: 12,
    img: "/image12.jpg",
    isIt: false,
  },
];

const Carousel = () => {
  const [img, setImg] = useState();
  const handleClick = (imgg) => {
    const oneIMg = images.find((imggg) => imggg.img === imgg.img);
    oneIMg.isIt = !oneIMg.isIt;

    setImg(oneIMg);
  };

  const handleNext = (id) => {
    const oneEl = id == 14 ? id - 13 : id + 1;
    const filterEl = images.find((img) => img.id == oneEl);
    filterEl.isIt = !filterEl.isIt;

    setImg(filterEl);
  };
  const handlePrev = (id) => {
    const oneEl = id == 1 ? id + 13 : id - 1;
    const filterEl = images.find((img) => img.id == oneEl);
    filterEl.isIt = !filterEl.isIt;

    setImg(filterEl);
  };

  return (
    <>
      <h1 className="text-black text-3xl text-center pt-[14px] font-bold">Image Slider by Ashraf</h1>
      <div className="max-w-[70%] flex justify-center items-center gap-5 rounded-lg p-6 flex-col mx-auto">
        <div className="max-w-full flex gap-2 items-center">
          <button
            onClick={() => {
              handlePrev(img ? img.id : images[1].id);
            }}
            className="bg-blue-400 hover:bg-blue-600 text-white p-3 rounded-3xl"
          >
            <img src="./pref.svg" height={20} width={20} alt="" />
          </button>
          <img
            className="w-[450px] h-[390px] flex mx-auto  rounded-lg"
            src={img ? img.img : images[1].img}
            alt=""
          />
          <button
            onClick={() => {
              handleNext(img ? img.id : images[1].id);
            }}
            className="bg-blue-400 hover:bg-blue-600 text-white p-3 rounded-3xl"
          >
            <img src="./next.svg" height={20} width={20} alt="" />
            <image className="" src={`./next.svg`} />
          </button>
        </div>

        <div className="flex gap-2 overflow-auto max-w-xl">
          {images.map((img) => (
            <img
              key={img.id}
              onClick={() => {
                handleClick(img);
              }}
              className="w-[90px] cursor-pointer  h-[80px] rounded"
              src={img.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
