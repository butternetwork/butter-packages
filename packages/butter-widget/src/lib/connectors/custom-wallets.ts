"use client";
import { Wallet } from "@rainbow-me/rainbowkit";
import BefiIcon from "../../assets/images/icon-befi.webp";
import BefiConnector from "../connectors/befi-connector";
import UDIcon from "../../assets/images/icon-ud.webp";
import { UdConnector } from "../connectors/ud-connector";
export const befiWallet = (): Wallet => ({
  id: "befi",
  name: "Befi Wallet",
  iconUrl: BefiIcon.src,
  iconBackground: "black",
  createConnector: () => {
    const connector = new BefiConnector();
    return {
      connector,
    };
  },
});

export const unWallet = (): Wallet => ({
  id: "ud",
  name: "Unstoppable Domain",
  iconUrl: UDIcon.src,
  iconBackground: "black",
  createConnector: () => {
    const connector = new UdConnector();
    return {
      connector,
    };
  },
});
