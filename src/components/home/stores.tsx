import Flex from "../reusable/flex";
import Grid from "../reusable/grid";
import SpaceY from "../reusable/space-y";
import { H3, P } from "../reusable/typography";
import { Button } from "../ui/button";
import HomeStoreCard, { HomeStoreCardType } from "./store-card";

const homeStoresData: HomeStoreCardType[] = [
  {
    id: Math.random().toString(),
    type: "tech",
    title: "Local Excellence",
    description: "Aissa Bedr",
    src: "/local-excellence.png",
    alt: "Local Excellence",
  },
  {
    id: Math.random().toString(),
    type: "music",
    title: "Absaroth Store",
    description: "Absaroth",
    src: "/absaroth.jpg",
    alt: "Absaroth",
  },
  {
    id: Math.random().toString(),
    type: "clothes",
    title: "Ren segnatures",
    description: "Rania",
    src: "/ren-segnatures.jpg",
    alt: "Ren Segnatures",
  },
  {
    id: Math.random().toString(),
    type: "tech",
    title: "Local Excellence",
    description: "Aissa Bedr",
    src: "/local-excellence.png",
    alt: "Local Excellence",
  },
  {
    id: Math.random().toString(),
    type: "music",
    title: "Absaroth Store",
    description: "Absaroth",
    src: "/absaroth.jpg",
    alt: "Absaroth",
  },
  {
    id: Math.random().toString(),
    type: "clothes",
    title: "Ren segnatures",
    description: "Rania",
    src: "/ren-segnatures.jpg",
    alt: "Ren Segnatures",
  },
];

export default function HomeStores() {
  return (
    <SpaceY size="content-lg">
      <SpaceY size="content-sm">
        <H3>Stores</H3>
        <Flex
          gap="sm"
          className="flex-col md:flex-row md:items-center md:justify-between"
        >
          <P>
            These are the stores of our valued clients who have subscribed to
            our service.
          </P>
          {homeStoresData.length > 0 && (
            <Button className="w-full sm:w-fit">
              See more ({homeStoresData.length})
            </Button>
          )}
        </Flex>
      </SpaceY>
      {homeStoresData.length > 0 ? (
        <Grid gap="md" className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {homeStoresData.map((card) => (
            <HomeStoreCard key={card.id} {...card} />
          ))}
        </Grid>
      ) : (
        <P>No stores to show.</P>
      )}
    </SpaceY>
  );
}
