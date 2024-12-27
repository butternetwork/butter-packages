type Props = {
    fromElement: HTMLDivElement | null;
    toElement: HTMLDivElement | null;
    onComplete: () => void;
};
declare const useHistoryAddAnimation: () => {
    executeAnimation: ({ fromElement, toElement, onComplete }: Props) => void;
};
export default useHistoryAddAnimation;
