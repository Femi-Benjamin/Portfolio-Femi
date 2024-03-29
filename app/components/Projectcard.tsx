"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

interface Props {
  image: string;
  title: string;
  text: string;
}

const Projectcard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="xl:w-[450px] md:w-[374px] w-[240px] xl:h-[280px] md:h-[280px] h-[150px] rounded-md cursor-pointer z-5"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-50" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex md:flex-col gap-5 py-1 z-[30]">
            <h1 className="text-zinc-100 md:text-2xl text-xs font-semibold leading-10">
              {title}
            </h1>
            <p className="text-gray-200 md:text-[20px] text-xs">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projectcard;
