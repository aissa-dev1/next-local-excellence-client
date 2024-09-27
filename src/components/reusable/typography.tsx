import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {}

export function H1({ className, ...rest }: H1Props) {
  return (
    <h1
      {...rest}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    />
  );
}

interface H3Props extends ComponentProps<"h3"> {}

export function H3({ className, ...rest }: H3Props) {
  return (
    <h3
      {...rest}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    />
  );
}

interface PProps extends ComponentProps<"p"> {}

export function P({ className, ...rest }: PProps) {
  return <p {...rest} className={cn("leading-7", className)} />;
}
