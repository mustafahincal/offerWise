import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { AuthProvider } from "@/contexts/Auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "@/components/content/Content";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </AuthProvider>
  );
}
