import { MantineThemeOverride } from "@mantine/core";
import { ButterWidgetConfig } from "./config/types";
declare const mantineTheme: MantineThemeOverride;
export default mantineTheme;
export declare const getThemeWithConfig: (config: Pick<ButterWidgetConfig, "colors" | "fontFamily">) => import("type-fest/source/partial-deep").PartialObjectDeep<import("@mantine/core").MantineTheme, {}>;
