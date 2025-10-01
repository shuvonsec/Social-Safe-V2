"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-soft hover:bg-blue-500 focus-visible:ring-blue-500",
        outline:
          "border border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500",
        ghost: "text-blue-600 hover:bg-blue-50",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400"
      },
      size: {
        default: "px-5 py-3",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "h-10 w-10 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
