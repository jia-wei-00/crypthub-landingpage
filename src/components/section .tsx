import { Button, Container } from "@mui/material";
import React from "react";
import "../styles/components/hero.scss";
import { motion } from "framer-motion";
import ScrollText from "./scroll-text";
import { ActionT, ModalStateT, SectionT } from "../type";
import { MODALACTIONS, initialModals } from "../constant";
import { CrypthubTraderDialog, P2PTraderDialog } from "./dialog";

const reducer = (state: ModalStateT, action: ActionT) => {
  switch (action.type) {
    case MODALACTIONS.CRYPTHUB_MODAL:
      return { ...state, crypthub_trader_modal: !state.crypthub_trader_modal };
    case MODALACTIONS.P2P_MODAL:
      return { ...state, p2p_trader_modal: !state.p2p_trader_modal };
    default:
      return state;
  }
};

const Section: React.FC<SectionT> = ({ title, subtitle, link, type }) => {
  const [modal, dispatch] = React.useReducer(reducer, initialModals);

  return (
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
          transition={{ ease: "linear", delay: 1.8, duration: 0.3 }}
          className="trade-btn"
        >
          <Button variant="contained" href={link} target="_blank">
            Trade Now
          </Button>
          <Button variant="outlined" onClick={() => dispatch({ type: type })}>
            Details
          </Button>
        </motion.div>
      </Container>
      <ScrollText />

      <CrypthubTraderDialog modal={modal} dispatch={dispatch} />
      <P2PTraderDialog modal={modal} dispatch={dispatch} />
    </div>
  );
};

export default Section;
