import { ReactNode } from "react";

interface DashboardLayoutProps{
    children : ReactNode;
}

export default function DashboardLayout({children}:DashboardLayoutProps){
    return(
        <main className="min-h-screen">
            {children}
        </main>
    );
}