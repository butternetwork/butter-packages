"use client";
declare module '@uauth/js' {
    export default class UAuth {
        constructor(config: { clientID: string; redirectUri: string });
        loginWithPopup(): Promise<any>;
    }
}