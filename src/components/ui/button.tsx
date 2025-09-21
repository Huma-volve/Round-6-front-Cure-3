import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-white bg-Background-Primary-Defult text-base py-4 px-6 border border-current rounded-[8px] cursor-pointer transition-colors duration-300 hover:bg-Background-Primary-Defult/90 ",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-Text-Primary-Defult hover:text-white text-base py-4 border-[1px] border-Border-Primary-Defult rounded-[8px] cursor-pointer relative overflow-hidden px-6 transform skew-x-[-21] transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-full before:left-0 before:bg-[#145db8] before:opacity-0 before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:right-0 hover:before:opacity-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "w-fit pt-4 py-6 text-Text-Neutral-Darker border-Text-Neutral-Darker border-[1px] rounded-[10px] flex flex-row gap-2 items-center hover:text-Background-Primary-Defult hover:border-Background-Primary-Defult w-fit !py-7 !px-6 text-Text-Neutral-Darker border-Text-Neutral-Darker border-[1px] rounded-[10px] flex flex-row gap-2 items-center hover:text-Background-Primary-Defult hover:border-Background-Primary-Defult",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
