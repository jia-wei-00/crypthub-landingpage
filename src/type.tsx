import { Dispatch } from "react";

export type SectionT = {
  title: string;
  subtitle: string;
  link: string;
  type: string;
};

export type ModalStateT = {
  crypthub_trader_modal: boolean;
  p2p_trader_modal: boolean;
};

export type ActionT = {
  type: string;
};

export type ModalPropsT = {
  modal: ModalStateT;
  dispatch: Dispatch<ActionT>;
};
