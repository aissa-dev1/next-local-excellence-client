"use client";

import { useRef } from "react";
import SpaceY from "../reusable/space-y";
import { H3, P } from "../reusable/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import HomeReviewCard, { HomeReviewCardType } from "./review-card";
import Autoplay from "embla-carousel-autoplay";

export const reviewsData: HomeReviewCardType[] = [
  { id: "1", title: "Aissa Bedr", description: "Hello world" },
  { id: "2", title: "Aissa Bedr", description: "Hello world" },
  { id: "3", title: "Aissa Bedr", description: "Hello world" },
  { id: "4", title: "Aissa Bedr", description: "Hello world" },
  { id: "5", title: "Aissa Bedr", description: "Hello world" },
];

export default function HomeReviews() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <SpaceY size="content-lg">
      <SpaceY size="content-sm">
        <H3>Reviews</H3>
        <P>These are short reviews from satisfied customers.</P>
      </SpaceY>
      {reviewsData.length > 0 ? (
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
          }}
          className="w-3/4 md:w-[90%] xl:w-[85%] 2xl:w-full mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => {
            plugin.current.reset();
            plugin.current.play(false);
          }}
        >
          <CarouselContent>
            {reviewsData.map((card) => (
              <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3">
                <HomeReviewCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <P>No reviews to show.</P>
      )}
    </SpaceY>
  );
}
