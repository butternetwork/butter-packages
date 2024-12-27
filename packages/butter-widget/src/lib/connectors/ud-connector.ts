"use client";
import UAuth from "@uauth/js";
import { InjectedConnector } from "wagmi/connectors/injected";

export class UdConnector extends InjectedConnector {
  readonly id = "ud";
  readonly name = "ud";
  constructor() {
    super();
  }

  async connect({ chainId }: { chainId?: number }) {
    const uauth = new UAuth({
      clientID: "f279b790-5e00-47ff-beb4-f958f0772297",
      redirectUri: "http://localhost:3000",
    });
    await uauth.loginWithPopup();
    return super.connect({ chainId });
  }
}
