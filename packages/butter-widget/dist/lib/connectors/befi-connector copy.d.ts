import { InjectedConnector } from 'wagmi/connectors/injected';
declare class BefiConnector extends InjectedConnector {
    readonly id = "befi";
    readonly name = "Befi wallet";
    constructor();
}
export default BefiConnector;
