import "@next/styles/styles.scss";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Head from "next/head";
import type { AppProps } from "next/app";
import store from "@next/store/configure-store";
import WithAuth from "@next/modules/authentication/components/with-auth";
import AppLayout from "@next/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Guy Tchoupo</title>
        <link rel="shortcut icon" href="/head-icon.png" />
      </Head>
      {/* <WithAuth> */}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      {/* </WithAuth> */}
    </Provider>
  );
}

export default MyApp;
