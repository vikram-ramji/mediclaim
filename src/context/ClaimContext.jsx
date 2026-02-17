import { createContext, useContext, useState } from "react";

const ClaimContext = createContext(null);

export const ClaimProvider = ({ children }) => {
  const [numPages, setNumPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [scale, setScale] = useState(1);

  const jumpToPage = (pageNum) => {
    if (pageNum === activePage) return;
    setActivePage(pageNum);
  };

  return (
    <ClaimContext.Provider
      value={{ activePage, jumpToPage, scale, setScale, numPages, setNumPages }}
    >
      {children}
    </ClaimContext.Provider>
  );
};

export const useClaim = () => {
  const context = useContext(ClaimContext);
  if (!context) {
    throw new Error("useClaim must be used within a ClaimProvider");
  }
  return context;
};
