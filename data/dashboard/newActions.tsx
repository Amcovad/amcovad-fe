import {
  AddCircle,
  UserAdd,
  Profile2User,
  DocumentUpload,
} from "iconsax-react";

type newActionProp = {
  backGround: string;
  borderColor: string;
  icon: JSX.Element | React.ReactNode;
  title: string;
  textColor: string;
};
const newActiondata: newActionProp[] = [
  {
    backGround: "bg-primary-25",
    borderColor: "border-primary-100",
    icon: <AddCircle size="24" variant="Bulk" />,
    title: "Create a New Transaction",
    textColor: "text-primary-600",
  },
  {
    backGround: "bg-danger-25",
    borderColor: "border-danger-100",
    icon: <UserAdd size="24" variant="Bulk" />,
    title: "Add a New Connection",
    textColor: "text-danger-600",
  },
  {
    backGround: "bg-success-25",
    borderColor: "border-success-100",
    icon: <Profile2User size="24" variant="Bulk" />,
    title: "Create a New Group",
    textColor: "text-success-600",
  },
  {
    backGround: "bg-warning-25",
    borderColor: "border-warning-100",
    icon: <DocumentUpload size="24" variant="Bulk" />,
    title: "Create a New Template",
    textColor: "text-warning-600",
  },
];

export default newActiondata;
