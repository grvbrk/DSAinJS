"use client";

import Image from "next/image";
import array from "../../../public/black/arrays.svg";
import btree from "../../../public/black/binary-tree.svg";
import bfilter from "../../../public/black/bloom-filter.svg";
import heap from "../../../public/black/heap.svg";
import LL from "../../../public/black/linked-list.svg";
import LRU from "../../../public/black/lru-cache.svg";
import recursion from "../../../public/black/recursion.svg";
import stack from "../../../public/black/stack.svg";
import string from "../../../public/black/string.svg";
import tries from "../../../public/black/tries.svg";
import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

export const images = [
  array,
  btree,
  bfilter,
  heap,
  LL,
  LRU,
  recursion,
  stack,
  string,
  tries,
];

export default function ImageContainer() {
  const FAST_DURATION = 8;
  const SLOW_DURATION = 35;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    let controls;
    const finalPos = -height / 3 - 6;

    if (mustFinish) {
      controls = animate(yTranslation, [yTranslation.get(), finalPos], {
        ease: "linear",
        duration: duration * (1 - yTranslation.get() / finalPos),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(yTranslation, [0, finalPos], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [yTranslation, height, duration, rerender]);

  return (
    <main>
      <motion.div
        className="grid grid-cols-2 gap-y-4 "
        ref={ref}
        style={{ y: yTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images, ...images].map((image, idx) => {
          const randomRotateNumber = Math.floor(Math.random() * 21) + -10;

          return (
            <Card
              key={idx}
              image={image}
              randomRotateNumber={randomRotateNumber}
            />
          );
        })}
      </motion.div>
    </main>
  );
}

type CardPropsType = {
  image: string;
  randomRotateNumber: number;
};

function Card({ image, randomRotateNumber }: CardPropsType) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className=" grid items-center justify-center"
      // style={{ objectFit: "cover" }}
    >
      <Link href="/">
        <Image
          src={image}
          alt={image}
          style={{
            height: "auto",
            width: "400px",
            fill: "white",
          }}
        />
      </Link>
    </motion.div>
  );
}
