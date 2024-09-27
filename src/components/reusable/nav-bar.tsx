import { ComponentProps } from "react";
import Container from "./container";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface NavBarProps extends Omit<ComponentProps<"div">, "children"> {}

export default function NavBar({ className, ...rest }: NavBarProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full flex flex-col justify-center h-16 shadow-sm shadow-white/10 bg-opacity-25 backdrop-blur-lg backdrop-filter z-10",
        className
      )}
      {...rest}
    >
      <Container>
        <Image
          className="rounded-full"
          src="/local-excellence.png"
          alt="Local Excellence"
          width={45}
          height={45}
        />
      </Container>
    </div>
  );
}
