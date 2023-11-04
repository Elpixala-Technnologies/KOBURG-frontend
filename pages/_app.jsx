import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.scss";
import Preloader from "@/src/Shared/Preloader/Preloader";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [loader]);


  return (
    <>
    {loader && <Preloader />}
    <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
    </QueryClientProvider>
  </>
  )
}
