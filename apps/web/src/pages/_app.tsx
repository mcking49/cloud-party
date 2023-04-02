import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps, AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
import type { IState } from "flagsmith/types";

import { env } from "@/env.mjs";
import "../styles/globals.css";
import { api } from "@/utils/api";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type Props = {
  flagsmithState?: IState;
};

type AppPropsWithLayout = AppProps<Props> & {
  Component: NextPageWithLayout;
} & Props;

const App: AppType = ({
  Component,
  pageProps,
  flagsmithState,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ClerkProvider {...pageProps}>
      <FlagsmithProvider
        serverState={flagsmithState}
        options={{ environmentID: env.NEXT_PUBLIC_FLAGSMITH_ENV_KEY }}
        flagsmith={flagsmith}
      >
        {getLayout(<Component {...pageProps} />)}
      </FlagsmithProvider>
    </ClerkProvider>
  );
};

App.getInitialProps = async () => {
  await flagsmith.init({ environmentID: env.NEXT_PUBLIC_FLAGSMITH_ENV_KEY });

  return {
    flagsmithState: flagsmith.getState(),
  };
};

export default api.withTRPC(App);
