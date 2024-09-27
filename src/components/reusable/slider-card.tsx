"use client";

import { useEffect, useRef, useState } from "react";
import Flex from "./flex";
import { Button } from "../ui/button";
import { H3, P } from "./typography";
import SpaceY from "./space-y";
import { Card, CardContent } from "../ui/card";

export interface SliderCardType {
  id: string;
  backgroundColor: string;
  title: string;
  description: string;
  btnLink: string;
  btnText: string;
}

interface SliderCardProps {
  list: SliderCardType[];
}

enum SliderCardConfig {
  Min = 0,
  Max = 100,
  DurationSeconds = 3,
}

export default function SliderCard({ list }: SliderCardProps) {
  const [cardIndex, setCardIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentCard = Array.isArray(list) ? list[cardIndex] : null;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentCardWidthRef = useRef(SliderCardConfig.Min);
  const progressBarRef = useRef<HTMLSpanElement>(null!);

  function prevCard() {
    setCardIndex((prev) => (prev <= 0 ? list.length - 1 : prev - 1));
    currentCardWidthRef.current = SliderCardConfig.Min;

    if (list.length > 1 && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function nextCard() {
    setCardIndex((prev) => (prev >= list.length - 1 ? 0 : prev + 1));
    currentCardWidthRef.current = SliderCardConfig.Min;

    if (list.length > 1 && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  useEffect(() => {
    if (!currentCard || !progressBarRef.current || paused) return;

    progressBarRef.current.style.width = `${currentCardWidthRef.current}%`;

    intervalRef.current = setInterval(() => {
      currentCardWidthRef.current += 1;
      progressBarRef.current.style.width = `${currentCardWidthRef.current}%`;

      if (currentCardWidthRef.current >= SliderCardConfig.Max) {
        nextCard();
      }
    }, (SliderCardConfig.DurationSeconds * 1000) / SliderCardConfig.Max);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardIndex, currentCard, paused]);

  if (!currentCard) return <P>No sponsors to show.</P>;

  return (
    <SpaceY size="content-sm">
      <Card
        className="relative w-full h-[225px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <CardContent className="pt-6">
          <SpaceY size="content-sm">
            <Flex className="items-center justify-between">
              <H3>{currentCard.title}</H3>
              <span
                className="relative w-14 h-1.5 bg-slate-500 rounded-md cursor-pointer duration-300 hover:h-2.5"
                onClick={() => {
                  currentCardWidthRef.current = SliderCardConfig.Min;
                  if (progressBarRef.current) {
                    progressBarRef.current.style.width = "0%";
                  }
                }}
              >
                <span
                  ref={progressBarRef}
                  className="absolute top-0 left-0 h-full bg-background rounded-md rounded-r-none"
                  style={{ width: "0%" }}
                />
              </span>
            </Flex>
            <P>{currentCard.description}</P>
          </SpaceY>

          <a href={currentCard.btnLink} target="_blank">
            <Button variant="outline" className="absolute left-6 bottom-6">
              {currentCard.btnText}
            </Button>
          </a>
          <P className="absolute right-6 bottom-6">
            {cardIndex + 1}/{list.length}
          </P>
        </CardContent>
      </Card>
      <Flex className="items-center justify-between">
        <Button onClick={prevCard}>Prev</Button>
        <Button onClick={nextCard}>Next</Button>
      </Flex>
    </SpaceY>
  );
}
