import { Button } from "../ui/button";
import { H1 } from "../reusable/typography";
import SpaceY from "../reusable/space-y";

export default function HomeHeader() {
  return (
    <SpaceY size="content-lg">
      <H1>
        Discover Local Excellence: Clothes, Food, Music, and More All in One
        Store!
      </H1>
      <Button className="w-full sm:w-fit">Discover</Button>
    </SpaceY>
  );
}
