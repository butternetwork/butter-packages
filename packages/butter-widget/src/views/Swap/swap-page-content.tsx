"use client";
import { useEffect, useState } from "react";
import { Box, Container } from "@mantine/core";
import MainCard from "../MainCard/main-card";
import { useAppDispatch } from "../../store/hooks";
import {
  setCurrentHistoryData,
  swapComplete,
} from "../../store/route/routes-slice";
import { saveHistory } from "../../utils/history-helper";
import FlashExchangeModal from "../../components/FlashExchangeModal";
import { useCurrentHistory } from "../../store/route/hooks";
import ErrorFallback from "../../components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";

const SwapPageContent = () => {

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeStamp = Number(localStorage.getItem("firstVisit"));
    if (!timeStamp || new Date().getTime() - timeStamp > 1800000) {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("firstVisit", String(new Date().getTime()));
      }, 0);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    }
  }, []);

  const currentHistory = useCurrentHistory();

  useEffect(() => {
    if (!!currentHistory) {
      saveHistory(currentHistory as any);
      dispatch(swapComplete());
      dispatch(setCurrentHistoryData(null));
    }
  }, [currentHistory]);

  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });

  return (
    <>
      <Container fluid p={0} pb={100}>
        {!loading ? (
          <>
            <Box
              style={{
                width: "100%",
              }}
            >
              <Box style={() => ({
                margin: "0 auto",
                width: mdUp ? "440px" : "100%",
              })}>
                <ErrorBoundary
                  FallbackComponent={(props) => (
                    <ErrorFallback
                      id={"SWAP_PAGE_CONTENT"}
                      {...props}
                    ></ErrorFallback>
                  )}
                  onError={(error, errorInfo) => {
                    console.log(
                      "error >>> ",
                      error,
                      "errorInfo >> ",
                      errorInfo,
                    );
                  }}
                >
                  <MainCard></MainCard>
                </ErrorBoundary>
              </Box>
              <FlashExchangeModal></FlashExchangeModal>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default SwapPageContent;
