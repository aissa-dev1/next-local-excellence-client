import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {}

export default function Container({ className, ...rest }: ContainerProps) {
  return <div {...rest} className={cn("container", className)} />;
}
