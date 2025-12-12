"use client";
import React from "react";
import Link from "next/link";
import Logo from "../ui/logo/Logo";
import { HeaderConfig } from "@/types/layout";
import DrawerComponent from "../ui/custom/Drawer";
import { cn } from "@/packages/utils/utils.shadcn";
import { ScrollDirection } from "@/packages/hooks/use-scroll";
import Navbar_mobile from "../features/navbar/mobile/Navbar_mobile";
import { Header__main } from "../ui/styled-components/styled-navbar";
import Navbar_desktop from "../features/navbar/desktop/Navbar_desktop";
import Navbar_hamburger from "../features/navbar/mobile/Navbar_hamburger";
import { layoutInfo, navigationLinks } from "@/packages/data/data.layout";

interface HeaderProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
  scrollDir?: ScrollDirection;
  isScrolled?: boolean;
  isAuthenticated?: boolean;
  refObject: React.RefObject<HTMLHeadElement | null>;
}

const Header = ({
  isMobile,
  isTablet,
  refObject,
  isScrolled,
  scrollDir,
  isAuthenticated,
}: HeaderProps) => {
  const HeaderConfig: HeaderConfig = {
    logo: layoutInfo.heading,
    navLinks: navigationLinks,
  };

  const isResponsive = isMobile || isTablet;

  const hamburgerMenuKey = "hamburger-menu";

  return (
    <>
      <Header__main
        ref={refObject}
        className={cn("Header_main", {
          scrolled: isScrolled,
          transparent: !isScrolled,
        })}
        initial={{ opacity: 0, y: -30, scaleY: 0.9 }}
        animate={
          isScrolled && !isResponsive
            ? scrollDir === "down"
              ? { opacity: 1, y: -5, scaleY: 0.95 }
              : { opacity: 1, y: 0, scaleY: 1 }
            : { opacity: 1, y: 0, scaleY: 1 }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        exit={{ opacity: 0, y: 0, scaleY: 1 }}
      >
        {
          //logo
          //logo
          //logo
          <Link href="/">
            <Logo label={HeaderConfig.logo as string} />
          </Link>
        }

        {isResponsive ? (
          // hamburger icon
          // hamburger icon
          // hamburger icon
          <Navbar_hamburger menuKey={hamburgerMenuKey} />
        ) : (
          // Desktop only version
          // Desktop only version
          // Desktop only version
          <Navbar_desktop
            navbarlinks={HeaderConfig.navLinks}
            isAuthenticated={isAuthenticated || false}
          />
        )}
      </Header__main>
      {
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        // mobile or tablet version sidebar
        isResponsive ? (
          <>
            <DrawerComponent menuKey={hamburgerMenuKey}>
              <Navbar_mobile
                navbarlinks={HeaderConfig.navLinks}
                isAuthenticated={isAuthenticated || false}
              />
            </DrawerComponent>
          </>
        ) : null
      }
    </>
  );
};

export default Header;
