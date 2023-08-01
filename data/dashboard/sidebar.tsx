import {
  Category,
  CardSend,
  DocumentUpload,
  Note1,
  WalletAdd1,
  Layer,
  UserCirlceAdd,
  UserTick,
} from "iconsax-react";

type sidebarProp = {
  Icon: any;
  name: string;
  url: string;
};

const sidebar: sidebarProp[] = [
  {
    Icon: Category,
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    Icon: CardSend,
    name: "Connection",
    url: "/dashboard/connection",
  },
  {
    Icon: CardSend,
    name: "Transaction",
    url: "/dashboard/transaction",
  },
  {
    Icon: CardSend,
    name: "Bank",
    url: "/dashboard/bank",
  },
  {
    Icon: DocumentUpload,
    name: "Templates",
    url: "/app/templates",
  },

  {
    Icon: Note1,
    name: "Drafts",
    url: "/drafts",
  },
  {
    Icon: WalletAdd1,
    name: "Wallet",
    url: "/wallet",
  },
  {
    Icon: Layer,
    name: "Legal",
    url: "/legal",
  },
  {
    Icon: UserCirlceAdd,
    name: "Personal Info & IDs",
    url: "/personal-info",
  },
  {
    Icon: UserTick,
    name: "Reputation",
    url: "/reputation",
  },
];

export default sidebar;
