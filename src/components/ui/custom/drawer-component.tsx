import { Drawer, DrawerContent } from "../shadcn/drawer";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";

interface DrawerProps {
  menuKey: string;
  children?: React.ReactNode;
}

const DrawerComponent: React.FC<DrawerProps> = ({ menuKey, children }) => {
  const { isOpen, closeMenu } = useHamburgerMenu(menuKey);

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && closeMenu()}>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
