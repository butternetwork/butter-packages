import { PublicKey } from "@solana/web3.js";
export function isAddress(address) {
    try {
        new PublicKey(address);
        return true;
    }
    catch (error) {
        return false;
    }
}
//# sourceMappingURL=isAddress.js.map