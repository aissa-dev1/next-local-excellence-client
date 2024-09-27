import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface SpaceYProps extends ComponentProps<"div"> {
  size?: keyof typeof SpaceYSizes;
}

enum SpaceYSizes {
  default = "space-y-0",
  section = "space-y-12",
  "content-sm" = "space-y-2",
  "content-md" = "space-y-4",
  "content-lg" = "space-y-6",
}

export default function SpaceY({
  className,
  size = "default",
  ...rest
}: SpaceYProps) {
  return <div {...rest} className={cn(SpaceYSizes[size], className)} />;
}
