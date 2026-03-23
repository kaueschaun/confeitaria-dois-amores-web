import { ReactNode } from "react"

export default function ClienteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* O Header geralmente importará do Main ou ClientComponents futuramente */}
            {children}
            {/* O Footer ficará aqui */}
        </>
    )
}
