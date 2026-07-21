import { ReactNode } from "react";

interface MarketingLayoutProps{
    children : ReactNode;
}

export default function MarketingLayout({children}:MarketingLayoutProps){
    return(
        <main className="min-h-screen">
            {children}
        </main>
    );
}