"use client";

import { Container } from "@mantine/core";
import SwapPageProvider from "./views/Swap/swap-page-provider";
import SwapSearchContainer from "./views/Swap/swap-search-container";
import SwapPageContent from "./views/Swap/swap-page-content";
import useConfigSdk from "./hooks/useConfigSdk";

const App = () => {
    useConfigSdk();
    return (
        <Container fluid p={0} c="foreground">
            <SwapPageProvider>
                <SwapSearchContainer>
                    <SwapPageContent />
                </SwapSearchContainer>
            </SwapPageProvider>
        </Container>
    )
}

export default App;