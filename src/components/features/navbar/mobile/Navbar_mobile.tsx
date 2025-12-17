import Navbar_link from "../Navbar_link";
import { ExtendedNavLink } from "@/types/layout";
import { DrawerTitle } from "@/components/ui/shadcn/drawer";
import { RainbowButton } from "@/components/ui/magic-ui/rainbow-button";

interface Navbar_mobileProps {
  isAuthenticated: boolean;
  navbarlinks: Array<ExtendedNavLink>;
}

const Navbar_mobile: React.FC<Navbar_mobileProps> = ({ navbarlinks, isAuthenticated }) => {
  return (
    <>
      <DrawerTitle></DrawerTitle>
      <nav className="flex flex-col justify-center items-center space-y-4 mt-6 text-center">
        {navbarlinks.map((link) => (
          <>
            {link.id === "home" ? (
              <Navbar_link key={link.id} link={link} isActive={true} />
            ) : (
              <Navbar_link key={link.id} link={link} />
            )}
          </>
        ))}
        <div className="pt-4">
          <RainbowButton className="w-full" onClick={() => {}}>
            Get Started
          </RainbowButton>
        </div>
        {isAuthenticated && <div></div>}
      </nav>
    </>
  );
};

export default Navbar_mobile;
