import { Chain, Token } from '@butternetwork/sdk';
export type TokenSelectorProps = {
    show: boolean;
    position: "from" | "to";
    onClose: () => void;
    onSelected: (chain: Chain, token: Token) => void;
};
