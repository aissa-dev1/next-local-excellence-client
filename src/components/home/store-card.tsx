import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export interface HomeStoreCardType {
  id: string;
  type: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export default function HomeStoreCard({
  type,
  title,
  description,
  src,
  alt,
}: HomeStoreCardType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="rounded-md"
          src={src}
          alt={alt}
          width={150}
          height={150}
        />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button variant="outline">Go for it</Button>
        <Badge className="capitalize">{type}</Badge>
      </CardFooter>
    </Card>
  );
}
