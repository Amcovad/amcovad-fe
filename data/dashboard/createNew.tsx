import { WalletAdd, Heart } from "iconsax-react";
import colors from "@/tokens/color.tokens";
import { CreateNewTransactType } from "@/components/dashboard/component/card/CreateNewTransact";

const createNew: CreateNewTransactType[] = [
  {
    color: "success",
    Icon: WalletAdd,
    iconColor: colors.success[700],
    title: "Start New Transaction",
    url: "/dashboard/transaction/create",
    btnTitle: "Lending Transaction",
  },
  {
    color: "primary",
    Icon: Heart,
    iconColor: colors.primary[700],
    title: "Quick Start with a Template",
    url: "/app/templates",
    btnTitle: "Select a Template",
  },
];

export default createNew;
