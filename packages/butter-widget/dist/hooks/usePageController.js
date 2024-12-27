"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cards } from "../store/ui/types";
const usePageController = () => {
    const [pages, setPages] = useState([]);
    const newCard = useRef(null);
    useEffect(() => {
        setPages([Cards.MainCard]);
    }, []);
    const [showHistory, _setShowHistory] = useState(false);
    const handleHistoryClose = useCallback(() => {
        // first execute hide animation
    }, []);
    const [showBestRouteCard, _setShowBestRouteCard] = useState(false);
    const handleBestContentRemoved = useCallback(() => {
        if (pages.indexOf(Cards.BestRoute) >= 0) {
            const arr = [...pages];
            arr.splice(arr.indexOf(Cards.BestRoute), 2);
            setPages([...arr]);
        }
    }, [pages]);
    const [showMoreRoute, _setShowMoreRoute] = useState(false);
    const handleMoreContentRemoved = useCallback(() => {
        if (pages.indexOf(Cards.MoreRoute) >= 0) {
            const arr = [...pages];
            arr.splice(arr.indexOf(Cards.MoreRoute), 1);
            setPages([...arr]);
        }
    }, [pages]);
    const insertCard = ({ card }) => {
        let arr = [...pages];
        newCard.current = card;
        switch (card) {
            case Cards.History:
                if (arr.indexOf(Cards.History) < 0) {
                    arr = [Cards.History].concat(arr);
                    setPages([...arr]);
                }
                break;
            case Cards.BestRoute:
                if (arr.indexOf(Cards.BestRoute) < 0) {
                    arr.push(Cards.BestRoute);
                    setPages([...arr]);
                }
                break;
            case Cards.MoreRoute:
                if (arr.indexOf(Cards.MoreRoute) < 0) {
                    arr.push(Cards.MoreRoute);
                    setPages([...arr]);
                }
                break;
            default:
                break;
        }
    };
    // useEffect(() => {
    //   if (newCard.current) {
    //     switch (newCard.current) {
    //       case Cards.History:
    //         swiper?.slideTo(swiper?.activeIndex + 1, 0);
    //         setTimeout(() => {
    //           swiper?.slideTo(0);
    //         }, 300);
    //         break;
    //       case Cards.BestRoute:
    //         if (pages.indexOf(Cards.History) >= 0) {
    //           swiper?.slideTo(2);
    //         } else {
    //           swiper?.slideTo(1);
    //         }
    //         break;
    //       case Cards.MoreRoute:
    //         if (pages.indexOf(Cards.History) >= 0) {
    //           swiper?.slideTo(3);
    //         } else {
    //           swiper?.slideTo(2);
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //     newCard.current = null;
    //   }
    //   if (removingHistory.current) {
    //     removingHistory.current = false;
    //     if (lastIndex.current <= 1) {
    //       swiper?.slideTo(0, 0);
    //     }
    //   }
    // }, [pages]);
    return {
        insertCard,
        pages,
        showBestRouteCard,
        showMoreRoute,
        showHistory,
        handleHistoryClose,
        // handleHistoryRemoved,
        handleBestContentRemoved,
        handleMoreContentRemoved,
    };
};
export default usePageController;
