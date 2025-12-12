"use client";
import { useRef } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import FontsProvider from "./FontsProvider";
import { ThemeProvider } from "./ThemesProvider";
import { TooltipProvider } from "../ui/shadcn/tooltip";
import { HamburgerMenuProvider } from "./HamburgerProvider";
import { useScrollStatus } from "@/packages/hooks/use-scroll";
import { useBreakpoint } from "@/packages/hooks/use-breakpoints";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const headerRef = useRef<HTMLHeadElement | null>(null);
  const { isScrolled, scrollDirection } = useScrollStatus();

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        storageKey="saas-theme"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <FontsProvider>
          <main style={{ minHeight: "100vh", paddingTop: "60px" }}>
            <HamburgerMenuProvider>
              <Header
                isMobile={isMobile}
                isTablet={isTablet}
                isDesktop={isDesktop}
                refObject={headerRef}
                scrollDir={scrollDirection}
                isScrolled={isScrolled}
                isAuthenticated={true}
              />
              <TooltipProvider>{children}</TooltipProvider>
            </HamburgerMenuProvider>
          </main>
          <Footer />
        </FontsProvider>
      </ThemeProvider>
    </>
  );
};

export default LayoutProvider;
