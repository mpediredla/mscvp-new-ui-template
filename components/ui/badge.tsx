import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "modern-badge border-transparent text-white hover:shadow-lg transform hover:scale-105",
        secondary:
          "bg-gradient-to-r from-brand-light/80 to-brand-dark-grey/60 text-brand-black border-transparent backdrop-blur-sm hover:shadow-md transform hover:scale-105",
        destructive: "modern-badge-error border-transparent text-white hover:shadow-lg transform hover:scale-105",
        outline:
          "border-brand-light/50 text-brand-black bg-white/60 backdrop-blur-sm hover:bg-brand-subtle/80 hover:shadow-md transform hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
