import "@next/styles/styles.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@next/store/configure-store";
import WithAuth from "@next/modules/authentication/components/with-auth";
import { Layout, Menu, Breadcrumb } from "antd";
import AppLayout from "@next/components/layout";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <WithAuth> */}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      {/* </WithAuth> */}
    </Provider>
  );
}

export default MyApp;
