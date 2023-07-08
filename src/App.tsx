import React from "react";
import { HeroSection } from "./components";
import "./styles/main.scss";
import { darkTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Section from "./components/section ";
import useScrollSnap from "react-use-scroll-snap";
import { MODALACTIONS } from "./constant";

function App() {
  const scroll_ref = React.useRef<HTMLDivElement>(null);

  useScrollSnap({ ref: scroll_ref, duration: 100, delay: 1 });

  return (
    <ThemeProvider theme={darkTheme}>
      <div ref={scroll_ref}>
        <HeroSection />
        <Section
          title="Crypthub Trader"
          subtitle="Your Best Trader Partner"
          link="https://crypthub-app.vercel.app/"
          type={MODALACTIONS.CRYPTHUB_MODAL}
        />
        <Section
          title="P2P Trader"
          subtitle="Your Best Trader Partner"
          link="https://crypthub-app.vercel.app/p2pTrader"
          type={MODALACTIONS.P2P_MODAL}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
