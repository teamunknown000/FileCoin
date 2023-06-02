import Header from "~/components/header";
import Footer from "~/components/footer";
import { ReactNode } from "react";
import StateContextProvider from "~/context/context";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main>
        <StateContextProvider>
          <Header />
          {children}
          <Footer />
        </StateContextProvider>
      </main>
    </>
  );
}
