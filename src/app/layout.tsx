import '../styled/global.scss'
import { Roboto } from 'next/font/google'

const font = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})


export const metadata = {
    title: 'Confeitaria Dois Amores',
    description: 'A melhor confeitaria',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>
                {children}
            </body>
        </html>
    )
}
