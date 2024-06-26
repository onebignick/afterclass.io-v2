import { type VariantProps, tv } from "tailwind-variants";

export type ComboboxVariants = VariantProps<typeof comboboxTheme>;

export const comboboxTheme = tv(
  {
    base: [
      "h-10",
      "w-full",
      "max-w-sm",
      "items-center",
      "justify-between",
      "self-stretch",
      "rounded-lg",
      "after:rounded-lg",
      "border-border-elevated",
      "bg-surface-base",
      "p-2",
    ],
  },
  { responsiveVariants: true },
);
