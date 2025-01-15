import { PropsWithChildren } from 'react';
type MagicButtonProps = {
    width: number | string;
    height: number | string;
    justifyContent: string;
    radius: string | number;
    onClick: () => void;
    selected: boolean;
};
declare const MagicButton: ({ children, width, height, justifyContent, radius, onClick, selected, }: PropsWithChildren<MagicButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default MagicButton;
