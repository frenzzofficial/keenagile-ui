import Navbar_link from "../Navbar_link";
import { ExtendedNavLink } from "@/types/layout";
import { ThemeSwitcher } from "@/components/layouts/ThemeSwitcher";

interface Navbar_desktopProps {
  navbarlinks: Array<ExtendedNavLink>;
  isAuthenticated: boolean;
}

const Navbar_desktop = ({ navbarlinks }: Navbar_desktopProps) => {
  return (
    <div className="flex items-center justify-between space-x-8">
      {navbarlinks.map((link) =>
        link.id === "home" ? (
          <Navbar_link key={link.id} link={link} isActive={true} />
        ) : (
          <Navbar_link key={link.id} link={link} />
        )
      )}
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar_desktop;
