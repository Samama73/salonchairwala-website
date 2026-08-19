"use client";

import React, { createContext, useContext, useState } from "react";

interface WhatsappPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const WhatsappPopupContext = createContext<WhatsappPopupContextType | undefined>(
  undefined
);

export function WhatsappPopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <WhatsappPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </WhatsappPopupContext.Provider>
  );
}

export function useWhatsappPopup() {
  const ctx = useContext(WhatsappPopupContext);
  if (!ctx) {
    throw new Error("useWhatsappPopup must be used within a WhatsappPopupProvider");
  }
  return ctx;
}