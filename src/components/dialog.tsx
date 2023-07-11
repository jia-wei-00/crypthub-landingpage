import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Zoom,
} from "@mui/material";
import { ModalPropsT } from "../type";
import { MODALACTIONS, crypthub_data, p2p_data } from "../constant";

import Swiper from "./swiper";

export const CrypthubTraderDialog = ({ modal, dispatch }: ModalPropsT) => {
  return (
    <Dialog
      open={modal.crypthub_trader_modal}
      onClose={() => dispatch({ type: MODALACTIONS.CRYPTHUB_MODAL })}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      TransitionComponent={Zoom}
    >
      <DialogTitle id="alert-dialog-title">Crypthub Trader</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ overflow: "hidden" }}
        >
          <Swiper data={crypthub_data} />
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
      fullWidth
      TransitionComponent={Zoom}
    >
      <DialogTitle id="alert-dialog-title">P2P TRADER</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Swiper data={p2p_data} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
