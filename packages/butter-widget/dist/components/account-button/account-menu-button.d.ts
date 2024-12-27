export interface AccountMenuButtonProps {
    address?: string;
    onDisconnect: () => void;
    onCopyAddress: () => void;
    icon?: string;
}
declare const AccountMenuButton: ({ address, onDisconnect, onCopyAddress, icon, }: AccountMenuButtonProps) => import("react/jsx-runtime").JSX.Element;
export default AccountMenuButton;
