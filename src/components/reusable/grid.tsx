import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface GridProps extends ComponentProps<"div"> {
  gap?: keyof typeof GridGaps;
}

enum GridGaps {
  "default" = "gap-0",
  "sm" = "gap-2",
  "md" = "gap-4",
  "lg" = "gap-6",
}

export default function Grid({
  className,
  gap = "default",
  ...rest
}: GridProps) {
  return <div {...rest} className={cn("grid", GridGaps[gap], className)} />;
}
