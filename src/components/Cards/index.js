/* eslint-disable @next/next/no-img-element */
export function Cards({ cards, currentIndex, title }) {
  return (
    <div className="flex overflow-auto scroll-smooth grid grid-cols-3 gap-3">
      <div className="m-2.5 p-2.5">
        <img
          className="blur-sm"
          src={cards[currentIndex]}
          alt={title[currentIndex]}
          width="177px"
          height="256px"
        />
        <span className="relative  bottom-9 flex content-center text-white  justify-center text-white font-bold">
          {title[currentIndex]}
        </span>
      </div>
      <div className="m-2.5 p-2.5  ">
        <img
          className="blur-sm"
          src={cards[currentIndex + 1]}
          alt={title[currentIndex + 1]}
          width="177px"
          height="256px"
        />
        <span className="relative  bottom-9 flex content-center text-white  justify-center text-white font-bold">
          {title[currentIndex + 1]}
        </span>
      </div>
      <div className="m-2.5 p-2.5  ">
        <img
          className="blur-sm"
          src={cards[currentIndex + 2]}
          alt={title[currentIndex + 2]}
          width="177px"
          height="256px"
        />
        <span className="relative  bottom-9  text-white  flex content-center justify-center text-white font-bold">
          {title[currentIndex + 2]}
        </span>
      </div>
    </div>
  );
}
