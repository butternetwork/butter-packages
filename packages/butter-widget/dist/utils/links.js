"use client";
export const chainExplorerUrl = ({ explore, hash, address, near, }) => {
    const link = explore.endsWith("/")
        ? explore.slice(0, explore.length - 1)
        : explore;
    if (near) {
        return "https://nearblocks.io/txns/" + hash;
    }
    if (!!hash) {
        return link + "/tx/" + hash;
    }
    if (!!address) {
        return link + "/address/" + address;
    }
    return link;
};
