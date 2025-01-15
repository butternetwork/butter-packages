import { SendTransactionOptions, WalletName, BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import { Connection, Transaction, TransactionSignature, TransactionVersion, VersionedTransaction, PublicKey } from '@solana/web3.js';
export interface GateWalletAdapterConfig {
}
export declare const GateWalletName: WalletName<"Gate">;
export declare class GateWalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Gate">;
    url: string;
    icon: string;
    supportedTransactionVersions: ReadonlySet<TransactionVersion>;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _readyState;
    constructor(_config?: GateWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    autoConnect(): Promise<void>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction<T extends Transaction | VersionedTransaction>(transaction: T, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    private _disconnected;
    private _accountChanged;
}
