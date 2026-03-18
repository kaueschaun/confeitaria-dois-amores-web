import StyledComponentsRegistry from '../lib/registry'

// Se você tiver um ThemeProvider global do styled-components, você o enveloparia aqui também.

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
            <body>
                <StyledComponentsRegistry>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
