'use client';

import { ReactNode } from "react"
import MSWProvider from "../../mocks/MSWProvider"

export default function ClienteLayout({ children }: { children: ReactNode }) {
    return (
        <MSWProvider>
            {/* O Header geralmente importará do Main ou ClientComponents futuramente */}
            {children}
            {/* O Footer ficará aqui */}
        </MSWProvider>
    )
}
