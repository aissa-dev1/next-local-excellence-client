import Flex from "../reusable/flex";
import SliderCard, { SliderCardType } from "../reusable/slider-card";
import SpaceY from "../reusable/space-y";
import { H3, P } from "../reusable/typography";
import { Button } from "../ui/button";

export const sponsorsData: SliderCardType[] = [
  {
    id: "1",
    backgroundColor: "#13544e",
    title: "Local Excellence",
    description:
      "Discover Local Excellence: Clothes, Food, Music, and More All in One Store!",
    btnLink: "https://www.google.com",
    btnText: "Shop Now",
  },
  {
    id: "2",
    backgroundColor: "#15a800",
    title: "Absaroth",
    description: "Shop the Latest Beats in Our Music Store!",
    btnLink: "https://www.google.com",
    btnText: "Shop Now",
  },
];

export default function HomeSponsors() {
  return (
    <SpaceY size="content-lg">
      <SpaceY size="content-sm">
        <H3>Sponsors</H3>
        <Flex
          gap="sm"
          className="flex-col md:flex-row md:items-center md:justify-between"
        >
          <P>
            Partner with us to showcase your brand among our top sponsors. Your
            business could be featured here next.
          </P>
          <Button className="w-full sm:w-fit">Make yours</Button>
        </Flex>
      </SpaceY>
      <SliderCard list={sponsorsData} />
    </SpaceY>
  );
}
