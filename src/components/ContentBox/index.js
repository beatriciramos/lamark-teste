/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { Cards } from "../Cards";

import Image from "next/image";

export function ContentBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    "/images/destaque.svg",
    "/images/eventos.svg",
    "/images/premio.svg",
    "/images/notice.svg",
    "/images/destaque2.svg",
  ];

  const title = [
    "DESTAQUE",
    "EVENTOS DA " + "SEMANA",
    "PRÊMIO ECO",
    "NOTÍCIAS",
    "DESTAQUE 2",
  ];

  const handleOnNextClick = () => {
    console.log(currentIndex);
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleOnPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="flex py-24 bg-gradient-to-r from-blue to-purple max-w-7xl  p-20 content-center justify-center ">
      <div className="flex content-center justify-center">
        <button onClick={handleOnPrevClick}>
          <Image
            src="/images/right.svg"
            alt="seta direita"
            width="70px"
            height="44px"
          />
        </button>
      </div>
      <Cards cards={cards} currentIndex={currentIndex} title={title} />
      <div className="flex content-center justify-center">
        <button onClick={handleOnNextClick}>
          <Image
            src="/images/left.svg"
            alt="seta esquerda"
            width="70px"
            height="44px"
          />
        </button>
      </div>
    </div>
  );
}
