import { RouteObj } from "../../utils/api/types";
export type MoreRouteCardProps = {};
export type RouteItemProps = {
    best: boolean;
    onClick: () => void;
    data: RouteObj;
};
