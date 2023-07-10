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
  icon: JSX.Element | React.ReactNode;
  name: string;
  url: string;
};

const sidebar: sidebarProp[] = [
  {
    icon: <Category size="22" variant="Bulk" />,
    name: "Dashboard",
    url: "/app/admin/dashboard",
  },
  {
    icon: <CardSend size="22" variant="Bulk" />,
    name: "Transaction",
    url: "/app/admin/dashboard/transaction",
  },
  {
    icon: <DocumentUpload size="22" variant="Bulk" />,
    name: "Templates",
    url: "/app/admin/dashboard/templates",
  },

  {
    icon: <Note1 size="22" variant="Bulk" />,
    name: "Drafts",
    url: "/dashboard/drafts",
  },
  {
    icon: <WalletAdd1 size="22" variant="Bulk" />,
    name: "Wallet",
    url: "/wallet",
  },
  {
    icon: <Layer size="22" variant="Bulk" />,
    name: "Legal",
    url: "/legal",
  },
  {
    icon: <UserCirlceAdd size="22" variant="Bulk" />,
    name: "Personal Info & IDs",
    url: "/personal-info",
  },
  {
    icon: <UserTick size="22" variant="Bulk" />,
    name: "Reputation",
    url: "/reputation",
  },
];

export default sidebar;
