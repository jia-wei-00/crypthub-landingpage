import React from "react";
import { HeroSection } from "./components";
import "./styles/main.scss";
import { darkTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Section from "./components/section ";
import useScrollSnap from "react-use-scroll-snap";
import { MODALACTIONS } from "./constant";
import FAQSection from "./components/faq-section";

function App() {
  const scroll_ref = React.useRef<HTMLDivElement>(null);

  useScrollSnap({ ref: scroll_ref, duration: 100, delay: 1 });

  return (
    <ThemeProvider theme={darkTheme}>
      <div ref={scroll_ref}>
        <HeroSection
          subtitle="Your Financial Landscaper"
          link_btn={{
            title: "Start Trading",
            link: "https://crypthub-app.vercel.app/?login=true",
          }}
          scrol_text={{ main: "crypthub", sub: "best trader" }}
        />
        <Section
          title="Crypthub Trader"
          subtitle="Your Best Trader Partner"
          link_btn={{
            title: "Trade Now",
            link: "https://crypthub-app.vercel.app/",
          }}
          type={MODALACTIONS.CRYPTHUB_MODAL}
          scrol_text={{ main: "crypthub", sub: "crypthub trader" }}
        />
        <Section
          title="P2P Trader"
          subtitle="Your Best Trader Partner"
          link_btn={{
            title: "Trade Now",
            link: "https://crypthub-app.vercel.app/p2pTrader",
          }}
          type={MODALACTIONS.P2P_MODAL}
          scrol_text={{ main: "crypthub", sub: "p2p trader" }}
        />
        <FAQSection
          title="FAQ"
          subtitle="If you want to know more about our product"
          link_btn={{
            title: "Contact Us",
            link: "https://crypthub-app.vercel.app/p2pTrader",
          }}
          scrol_text={{ main: "crypthub", sub: "frequently ask question" }}
        />
        <Section
          title="Contact Us"
          subtitle="If you want to know more about our product"
          link_btn={{
            title: "Contact Us",
            link: "https://crypthub-app.vercel.app/p2pTrader",
          }}
          scrol_text={{ main: "crypthub", sub: "contact us" }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
