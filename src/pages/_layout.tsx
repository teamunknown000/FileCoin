import Header from "~/components/header";
import Footer  from "~/components/footer";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}