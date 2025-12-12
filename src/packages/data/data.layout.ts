import { ExtendedNavLink, FooterConfig } from "@/types/layout";

export const layoutInfo = {
  heading: "Keenagile",
  description:
    "Transform your business with our powerful SaaS platform. Scale faster, work smarter, grow bigger.",
  copyright: "Copyright © 2025 keenaglie.com All Right are Reserved.",
};

export const navigationLinks: Array<ExtendedNavLink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" },
  { id: "features", label: "Features", href: "/features", icon: "Package" },
  { id: "pricing", label: "Pricing", href: "/pricing", icon: "Tag" },
  { id: "faq", label: "FAQ", href: "/faq", icon: "QuestionMarkCircle" },
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" },
];

export const footerLinks: FooterConfig = {
  layoutInfo: layoutInfo,

  // list of sections
  sections: ["product", "company", "support"],

  // list of links
  productLinks: [
    {
      id: "product-Features",
      label: "Features",
      href: "/features",
      icon: "Package",
    },
    {
      id: "product-Pricing",
      label: "Pricing",
      href: "/pricing",
      icon: "Tag",
    },
    {
      id: "product-API",
      label: "API",
      href: "/",
      icon: "FileText",
    },
    {
      id: "product-Documentation",
      label: "Documentation",
      href: "/",
      icon: "BookOpen",
    },
  ],

  companyLinks: [
    {
      id: "company-About",
      label: "About Us",
      href: "/about",
      icon: "Info",
    },
    {
      id: "company-Blog",
      label: "Blog",
      href: "/blog",
      icon: "ArrowLeftRight",
    },
    {
      id: "company-Careers",
      label: "Careers",
      href: "/careers",
      icon: "Briefcase",
    },
    {
      id: "company-Contact",
      label: "Contact",
      href: "/contact",
      icon: "Mail",
    },
  ],

  supportLinks: [
    {
      id: "support-HelpCenter",
      label: "Help Center",
      href: "/help",
      icon: "LifeBuoy",
    },
    {
      id: "support-Community",
      label: "Community",
      href: "/community",
      icon: "Users",
    },
    {
      id: "support-Status",
      label: "Status",
      href: "/status",
      icon: "Activity",
    },
    {
      id: "support-Security",
      label: "Security",
      href: "/security",
      icon: "ShieldCheck",
    },
  ],

  socialLinks: [
    {
      id: "social-Instagram",
      label: "Instagram",
      href: "/",
      icon: "Instagram",
    },
    {
      id: "social-X",
      label: "X",
      href: "/",
      icon: "X",
    },
    {
      id: "social-LinkedIn",
      label: "LinkedIn",
      href: "/",
      icon: "Linkedin",
    },
    {
      id: "social-Mail",
      label: "Mail",
      href: "/",
      icon: "Mail",
    },
  ],
};
