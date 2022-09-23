import { Call, Mail, Location } from "../public/assets/footer";
type Routes = {
  title: string;
  url: string;
};
type Social = {
  image: any;
  url: string;
};
type Contacts = {
  icon: any;
  link: string;
  name: string;
};

type Footer = {
  social: Social[];
  routes: Routes[];
  contacts: Contacts[];
};
const footer: Footer = {
  social: [
    {
      image: "/assets/social/instagram.svg",
      url: "https://instagram.com/",
    },
    {
      image: "/assets/social/facebook.svg",
      url: "https://facebook.com/",
    },
    {
      image: "/assets/social/linkin.svg",
      url: "https://linkin.com/",
    },
    {
      image: "/assets/social/twitter.svg",
      url: "https://twitter.com/",
    },
  ],
  routes: [
    {
      title: " About us",
      url: "/about",
    },
    {
      title: " Services & Products",
      url: "/services",
    },
    {
      title: "FAQs",
      url: "/faqs",
    },
    {
      title: "Careers",
      url: "/careers",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Updates",
      url: "/updates",
    },
  ],
  contacts: [
    {
      icon: Call,
      link: "tel:+23490400032453",
      name: "+ 234 (0) 90400032453",
    },
    {
      icon: Mail,
      link: "mailto:contactus@amcovad.com",
      name: "contactus@amcovad.com",
    },
    {
      icon: Location,
      link: "",
      name: "3rd Floor, Central District Area, Abuja.",
    },
  ],
};

export default footer;
