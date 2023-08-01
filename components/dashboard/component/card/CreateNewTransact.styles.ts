import COLOR from "@/utils/colors";

export const styles = {
  base: [
    "border",
    "h-80 ",
    "lg:h-96",
    "lg:w-96",
    "relative",
    "rounded",
    "w-80",
  ],
  textBase: ["font-Inter", "max-w-[200px]", "pt-8", "text-base", "text-center"],
  topDivClass: [
    "absolute ",
    "flex ",
    "flex-col ",
    "inset-x-0 ",
    "items-center",
    "justify-center",
    "lg:top-16",
    "top-12",
  ],
  bottomDivClass: [
    "absolute",
    "bottom-14 ",
    "flex-col",
    "flex",
    "inset-x-0 ",
    "items-center",
    "justify-center",
  ],
  variant: {
    background: {
      [COLOR.SUCCESS]: ["bg-success-25", "border-success-100"],
      [COLOR.SECONDARY]: ["bg-secondary-25", "border-secondary-100"],
      [COLOR.PRIMARY]: ["bg-primary-25", "border-primary-100"],
      [COLOR.DANGER]: ["bg-danger-25", "border-danger-100"],
      [COLOR.WARNING]: ["bg-warning-25", "border-warning-100"],
    },
    text: {
      [COLOR.PRIMARY]: ["text-primary-700"],
      [COLOR.SECONDARY]: ["text-secondary-700"],
      [COLOR.SUCCESS]: ["text-success-700"],
      [COLOR.DANGER]: ["text-danger-700"],
      [COLOR.WARNING]: ["text-warning-700"],
    },
  },
};
