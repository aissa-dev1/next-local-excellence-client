import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface FlexProps extends ComponentProps<"div"> {
  gap?: keyof typeof FlexGaps;
}

enum FlexGaps {
  "default" = "gap-0",
  "sm" = "gap-2",
  "md" = "gap-4",
  "lg" = "gap-6",
}

export default function Flex({
  className,
  gap = "default",
  ...rest
}: FlexProps) {
  return <div {...rest} className={cn("flex", FlexGaps[gap], className)} />;
}
