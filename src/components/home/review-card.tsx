import SpaceY from "../reusable/space-y";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export interface HomeReviewCardType {
  id: string;
  title: string;
  description: string;
}

export default function HomeReviewCard({
  title,
  description,
}: HomeReviewCardType) {
  return (
    <Card className="flex items-center h-[200px]">
      <CardContent>
        <SpaceY size="content-md">
          <CardTitle>{title}</CardTitle>
          <CardDescription>"{description}"</CardDescription>
        </SpaceY>
      </CardContent>
    </Card>
  );
}
