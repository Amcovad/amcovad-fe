import { ColorType } from "@/utils/colors";
import {
  AddCircle,
  UserAdd,
  Profile2User,
  DocumentUpload,
} from "iconsax-react";

type newActionProp = {
  color: ColorType;
  icon: JSX.Element | React.ReactNode;
  title: string;
  textColor: string;
};
const newActiondata: newActionProp[] = [
  {
    color: "primary",
    icon: <AddCircle size="24" variant="Bulk" />,
    title: "Create a New Transaction",
    textColor: "text-primary-600",
  },
  {
    color: "danger",

    icon: <UserAdd size="24" variant="Bulk" />,
    title: "Add a New Connection",
    textColor: "text-danger-600",
  },
  {
    color: "success",

    icon: <Profile2User size="24" variant="Bulk" />,
    title: "Create a New Group",
    textColor: "text-success-600",
  },
  {
    color: "warning",

    icon: <DocumentUpload size="24" variant="Bulk" />,
    title: "Create a New Template",
    textColor: "text-warning-600",
  },
];

export default newActiondata;
