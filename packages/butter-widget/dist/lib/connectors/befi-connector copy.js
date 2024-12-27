"use client";
import { InjectedConnector } from "wagmi/connectors/injected";
class BefiConnector extends InjectedConnector {
    constructor() {
        super();
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "befi"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Befi wallet"
        });
    }
}
export default BefiConnector;
