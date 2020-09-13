import Home from "./home/Home";
import { withTheme, ThemeProvider } from "emotion-theming";
import { css, Global } from "@emotion/core";
import theme from "./styles/theme";
import { todoListState } from "../atoms/Todo";
import {
  RecoilRoot,
  useRecoilTransactionObserver_UNSTABLE,
  useSetRecoilState,
} from "recoil";
import { useEffect } from "react";

function index() {
  const makeGlobalStyles = (theme) => css`
    body {
      background: ${theme.colors.light};
      margin: ${theme.default.m};
      padding: ${theme.default.p};
      font-family: ${theme.default.font};
      a {
        color: inherit;
        text-decoration: inherit;
      }
    }
  `;

  // PERSISTING STATE

  function PersistenceObserver() {
    useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
      const atomLoadable = snapshot.getLoadable(todoListState);
      if (atomLoadable.state === "hasValue") {
        localStorage.setItem(
          todoListState.key,
          JSON.stringify({ value: atomLoadable.contents })
        );
      }
    });
    return null;
  }

  const GlobalStyles = withTheme(({ theme }) => (
    <Global styles={makeGlobalStyles(theme)} />
  ));

  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <PersistenceObserver />
          <Home />
          <GlobalStyles />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default index;
