import chainIdToType from "../utils/chainIdToType.js";
import { getProvider } from "./utils.js";
const executeRoute = async (route) => {
    const chainId = Array.isArray(route) ? route[0].chainId : route.chainId;
    const chainType = chainIdToType(chainId);
    const provider = getProvider(chainType);
    if (!provider) {
        throw new Error(`Provider not found for chain ${chainId}`);
    }
    return await provider.executeRoute(route);
};
export default executeRoute;
//# sourceMappingURL=execute.js.map