import Head  from "next/head";
import Header from "~/components/header";
import Footer  from "~/components/footer";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Next App</title>
            </Head>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}