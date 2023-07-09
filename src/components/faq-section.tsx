import { Container } from "@mui/material";
import React from "react";
import "../styles/components/hero.scss";
import { motion } from "framer-motion";
import ScrollText from "./scroll-text";
import { SectionT } from "../type";
import FAQAccordions from "./faq";

const FAQSection: React.FC<SectionT> = ({ title, subtitle, scrol_text }) => {
  return (
    <>
      <div className="section-container">
        <Container maxWidth="lg">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ ease: "linear", delay: 0.5, duration: 0.3 }}
            className="logo"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ ease: "linear", delay: 1.3, duration: 0.2 }}
            className="title"
          >
            {subtitle}
          </motion.div>
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ ease: "linear", delay: 1.5, duration: 0.2 }}
            className="title"
          >
            <FAQAccordions />
          </motion.div>
        </Container>
        <ScrollText main={scrol_text.main} sub={scrol_text.sub} />
      </div>
    </>
  );
};

export default FAQSection;
