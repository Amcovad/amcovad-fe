import Button from "@/components/form/Button";
import { WalletAdd, Heart } from "iconsax-react";

const createNew = [
  {
    backGround: "bg-success-25",
    borderColor: "border-success-100",
    Icon: WalletAdd,
    iconColor: "#00793F",
    title: "Start New Transaction",
    textColor: "text-success-700",
    url: "/app/transaction/new",
    btn: (
      <Button color="success" size="lg">
        Lending Transaction
      </Button>
    ),
  },
  {
    backGround: "bg-primary-25",
    borderColor: "border-primary-100",
    Icon: Heart,
    iconColor: "#016C95",
    title: "Quick Start with a Template",
    textColor: "text-primary-700",
    url: "/app/templates",
    btn: (
      <Button color="primary" size="lg">
        Select a Template
      </Button>
    ),
  },
];

export default createNew;
