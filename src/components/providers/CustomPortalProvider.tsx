"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface PortalState {
  [key: string]: boolean;
}

interface CustomPortalContextType {
  getIsOpen: (key: string) => boolean;
  openPortal: (key: string) => void;
  closePortal: (key: string) => void;
  togglePortal: (key: string) => void;
}

const CustomPortalContext = createContext<CustomPortalContextType | undefined>(undefined);

export const CustomPortalProvider = ({ children }: { children: ReactNode }) => {
  const [portalStates, setPortalStates] = useState<PortalState>({});

  const getIsOpen = useCallback((key: string) => portalStates[key] ?? false, [portalStates]);

  const openPortal = useCallback((key: string) => {
    setPortalStates((prev) => ({ ...prev, [key]: true }));
  }, []);

  const closePortal = useCallback((key: string) => {
    setPortalStates((prev) => ({ ...prev, [key]: false }));
  }, []);

  const togglePortal = useCallback((key: string) => {
    setPortalStates((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <CustomPortalContext.Provider value={{ getIsOpen, openPortal, closePortal, togglePortal }}>
      {children}
    </CustomPortalContext.Provider>
  );
};

export const useCustomPortal = (key: string) => {
  const context = useContext(CustomPortalContext);
  if (!context) throw new Error("useCustomPortal must be used within a CustomPortalProvider");

  const { getIsOpen, openPortal, closePortal, togglePortal } = context;

  return {
    isOpen: getIsOpen(key),
    openPortal: () => openPortal(key),
    closePortal: () => closePortal(key),
    togglePortal: () => togglePortal(key),
  };
};
