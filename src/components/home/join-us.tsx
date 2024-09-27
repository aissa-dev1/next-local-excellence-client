import Flex from "../reusable/flex";
import SpaceY from "../reusable/space-y";
import { H3, P } from "../reusable/typography";
import { Button } from "../ui/button";

export default function HomeJoinUs() {
  return (
    <SpaceY size="content-lg">
      <SpaceY size="content-sm">
        <H3>Join Us Today</H3>
        <P>
          <strong>Sign up</strong> now to unlock exclusive access to our
          products and deals.
        </P>
        <P>
          Already a member? <strong>Log in</strong> and start exploring!
        </P>
      </SpaceY>
      <Flex gap="md">
        <Button>Sign up</Button>
        <Button variant="outline">Login</Button>
      </Flex>
    </SpaceY>
  );
}
