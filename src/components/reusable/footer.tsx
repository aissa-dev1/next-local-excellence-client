import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import Container from "./container";
import { P } from "./typography";

interface FooterProps extends Omit<ComponentProps<"div">, "children"> {}

export default function Footer({ className, ...rest }: FooterProps) {
  const publishYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn("w-full", className)} {...rest}>
      <Container className="bg-card text-white py-3 px-4 rounded-none sm:rounded-t-md">
        <P>
          Copyright ©{" "}
          {publishYear === currentYear
            ? publishYear
            : `${publishYear}-${currentYear}`}{" "}
          Local Excellence all rights reserved.
        </P>
        <P>Project started at 22/9/2024 and canceled at 27/9/2024.</P>
      </Container>
    </div>
  );
}
