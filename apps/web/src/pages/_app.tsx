import { type AppProps, type AppType } from "next/app";
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
import { type IState } from "flagsmith/types";

import { env } from "@/env.mjs";
import "../styles/globals.css";

type Props = {
  flagsmithState?: IState;
};

const App: AppType = ({
  Component,
  pageProps,
  flagsmithState,
}: AppProps & Props) => {
  return (
    <FlagsmithProvider
      serverState={flagsmithState}
      options={{ environmentID: env.NEXT_PUBLIC_FLAGSMITH_ENV_KEY }}
      flagsmith={flagsmith}
    >
      <Component {...pageProps} />
    </FlagsmithProvider>
  );
};

App.getInitialProps = async () => {
  await flagsmith.init({ environmentID: env.NEXT_PUBLIC_FLAGSMITH_ENV_KEY });

  return {
    flagsmithState: flagsmith.getState(),
  };
};

export default App;
