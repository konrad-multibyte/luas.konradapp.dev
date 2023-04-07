import './globals.css'

export const metadata = {
  title: 'Luas App',
  description: 'Luas App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
