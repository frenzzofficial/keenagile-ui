import React from "react";
import Link from "next/link";
import { NavLink } from "@/types/layout";

// Props for rendering a single navigation link
export interface NavLinkProps {
  link: NavLink;
  isActive?: boolean;
  bottomBorder?: boolean;
  onClick?: (link: NavLink) => void;
  isMobile?: boolean;
  fontSize?: string;
}

const Navbar_link: React.FC<NavLinkProps & { style?: React.CSSProperties }> = ({
  link,
  isActive,
  fontSize = "1rem",
  bottomBorder = true,
}) => {
  return (
    <Link
      key={link.id}
      href={link.href}
      style={{ fontSize: fontSize }}
      className={`group/link relative w-fit font-medium transition-colors duration-200 text-accent
         hover:text-indigo-600 ${isActive ? "text-indigo-600" : "text-muted"}`}
    >
      {link.label}
      {bottomBorder && (
        <span
          className={`
          absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover/link:w-full group-hover/link:left-0
          ${isActive ? "w-full left-0 bg-indigo-600" : "w-0 left-0"}
          `}
        ></span>
      )}
    </Link>
  );
};

export default Navbar_link;
