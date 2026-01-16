import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Le Juge 🧑‍⚖️ | Analyse de Texte IA",
  description: "Analysez l'attitude, la posture émotionnelle et l'image que renvoie un texte grâce à l'intelligence artificielle.",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="fr" className={inter.className}>
    <body className="gradient-bg min-h-screen">
      <Providers>{children}</Providers>
    </body>
  </html>
)

export default RootLayout
