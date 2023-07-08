import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ModalPropsT } from "../type";
import { MODALACTIONS } from "../constant";
import CrypthubImage from "../assets/crypthub.png";
import { Carousel } from "react-3dm-carousel";

const data = [
  { id: "1", title: "1", description: "1", image: CrypthubImage },
  { id: "2", title: "1", description: "1", image: CrypthubImage },
  { id: "3", title: "1", description: "1", image: CrypthubImage },
  { id: "4", title: "1", description: "1", image: CrypthubImage },
  { id: "5", title: "1", description: "1", image: CrypthubImage },
  { id: "6", title: "1", description: "1", image: CrypthubImage },
];

export const CrypthubTraderDialog = ({ modal, dispatch }: ModalPropsT) => {
  return (
    <Dialog
      open={modal.crypthub_trader_modal}
      onClose={() => dispatch({ type: MODALACTIONS.CRYPTHUB_MODAL })}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xl"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Carousel cardsData={data} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export const P2PTraderDialog = ({ modal, dispatch }: ModalPropsT) => {
  return (
    <Dialog
      open={modal.p2p_trader_modal}
      onClose={() => dispatch({ type: MODALACTIONS.P2P_MODAL })}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">p2p</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
