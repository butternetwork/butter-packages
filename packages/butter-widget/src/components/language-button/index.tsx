"use client";
import { Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useTranslation } from "react-i18next";
import { useLanguageButtonStyles } from "./style";
import IconWorld from "../icons/icon-world";

type language = {
  id: string;
  name: string;
  englishName: string;
};
export const languageCards: Array<language> = [
  {
    id: "en",
    name: "English",
    englishName: "ENGLISH",
  },
  {
    id: "zh",
    name: "简体中文",
    englishName: "CHINESE SIMPLIFIED",
  },
  {
    id: "zh-TW",
    name: "繁體中文",
    englishName: "CHINESE TRADITIONAL",
  },
  {
    id: "fr",
    name: "Français",
    englishName: "FRENCH",
  },
  {
    id: "ja",
    name: "日本語",
    englishName: "JAPANESE",
  },
  {
    id: "kr",
    name: "한국어",
    englishName: "KOREAN",
  },

  {
    id: "ru",
    name: "Русский",
    englishName: "RUSSIAN",
  },

  {
    id: "es",
    name: "Español",
    englishName: "SPANISH",
  },

  {
    id: "tr",
    name: "Türkiye",
    englishName: "TURKISH",
  },

  {
    id: "vi",
    name: "Tiếng Việt",
    englishName: "VIETNAMESE",
  },
  {
    id: "pt",
    name: "Português",
    englishName: "PORTUGUESE",
  },
];

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const { classes } = useLanguageButtonStyles();
  // const [unSupport, setIsUnSupport] = useState(false);
  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
  const changeLanguageFunc = (item: language) => {
    i18n.changeLanguage(item.id);
  };

  const theme = useMantineTheme();

  return (
    <Menu shadow="md">
      <Menu.Target>
        <UnstyledButton className={classes.button}>
          <IconWorld color={theme.colors.foreground[6]}
            width={mdUp ? 20 : 18}
            height={mdUp ? 20 : 18}></IconWorld>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className={classes.content}>
        {languageCards.map((item, index) => {
          return (
            <div key={index}>
              {" "}
              <Menu.Item mr={24} onClick={() => changeLanguageFunc(item)} className={classes.menuItem}>
                <Text fz={14} fw={600}>
                  {item.name}
                </Text>
              </Menu.Item>
            </div>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageButton;
