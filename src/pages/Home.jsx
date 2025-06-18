import { useState, useEffect } from "react";
import { HomeResMobile } from "./HomeRes/HomeResMobile";
import { HomeResTable } from "./HomeRes/HomeResTablet";
import { Home as HomeResDesktop } from "./HomeRes/HomeResDesktop";

export const Home = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const detectScreenSize = () => {
      const width = window.innerWidth;

      if (width < 820) {
        setScreenSize("sm"); // Mobile
      } else if (width >= 820 && width < 1536) {
        setScreenSize("md"); // Tablet
      } else {
        setScreenSize("xl"); // Desktop grande/monitores externos
      }
    };

    detectScreenSize();

    window.addEventListener("resize", detectScreenSize);

    return () => window.removeEventListener("resize", detectScreenSize);
  }, []);

  // Renderizar componente según el tamaño de pantalla
  const renderResponsiveComponent = () => {
    switch (screenSize) {
      case "sm":
        return <HomeResMobile />;
      case "md":
        return <HomeResTable />;
      case "xl":
        return <HomeResDesktop />; // Monitores grandes
      default:
        return <HomeResMobile />; // Fallback
    }
  };

  return <div>{renderResponsiveComponent()}</div>;
};
