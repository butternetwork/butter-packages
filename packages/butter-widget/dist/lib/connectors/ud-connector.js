"use client";
import UAuth from "@uauth/js";
import { InjectedConnector } from "wagmi/connectors/injected";
export class UdConnector extends InjectedConnector {
    constructor() {
        super();
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ud"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ud"
        });
    }
    async connect({ chainId }) {
        const uauth = new UAuth({
            clientID: "f279b790-5e00-47ff-beb4-f958f0772297",
            redirectUri: "http://localhost:3000",
        });
        await uauth.loginWithPopup();
        return super.connect({ chainId });
    }
}
