import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Page gutter + 1120px max content width (1280px desktop frame minus 80px gutters). */
export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-10 xl:px-20", className)} {...props} />;
}
