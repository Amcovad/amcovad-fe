import COLOR from "@/utils/colors";

export const styles = {
  base: [
    "border",
    "cursor-pointer",
    "duration-500",
    "flex-col",
    "flex",
    "h-40",
    "hover:scale-105",
    "items-center",
    "justify-center",
    "lg:h-52",
    "lg:w-1/4",
    "m-0.5",
    "rounded-md",
    "transition",
    "w-1/2",
  ],
  linkContainer: ["flex-col", "flex", "items-center", "justify-center"],
  textColor: ["font-bold", "mt-3", "text-center", "text-sm", "w-32"],
  variant: {
    background: {
      [COLOR.SUCCESS]: ["bg-success-25", "border-success-100"],
      [COLOR.SECONDARY]: ["bg-secondary-25", "border-secondary-100"],
      [COLOR.PRIMARY]: ["bg-primary-25", "border-primary-100"],
      [COLOR.DANGER]: ["bg-danger-25", "border-danger-100"],
      [COLOR.WARNING]: ["bg-warning-25", "border-warning-100"],
    },
    text: {
      [COLOR.PRIMARY]: ["text-primary-600"],
      [COLOR.SECONDARY]: ["text-secondary-600"],
      [COLOR.SUCCESS]: ["text-success-600"],
      [COLOR.DANGER]: ["text-danger-600"],
      [COLOR.WARNING]: ["text-warning-600"],
    },
  },
};
