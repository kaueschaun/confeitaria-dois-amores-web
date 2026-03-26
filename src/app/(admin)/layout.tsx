import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f3f4f6' }}>
            {/* <aside style={{ width: '250px', background: '#ffffff', borderRight: '1px solid #e5e7eb', padding: '20px' }}>
                <h2>Painel Admin</h2>
                <nav style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/produtos">Produtos</a>
                </nav>
            </aside> */}
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    )
}
