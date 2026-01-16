import { Providers } from "@/components/Providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Le Juge 🧑‍⚖️ | Analyse de Texte IA",
  description: "Analysez l'attitude, la posture émotionnelle et l'image que renvoie un texte grâce à l'intelligence artificielle. Découvrez ce que vos mots révèlent vraiment.",
  keywords: ["analyse de texte", "IA", "intelligence artificielle", "émotions", "ton", "attitude", "OpenAI"],
  authors: [{ name: "Livio Gama" }],
  creator: "Livio Gama",
  metadataBase: new URL("https://judge.liviogama.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://judge.liviogama.com",
    title: "Le Juge 🧑‍⚖️ | Analyse de Texte IA",
    description: "Analysez l'attitude, la posture émotionnelle et l'image que renvoie un texte grâce à l'intelligence artificielle.",
    siteName: "Le Juge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Le Juge - AI Text Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Juge 🧑‍⚖️ | Analyse de Texte IA",
    description: "Analysez l'attitude et la posture émotionnelle d'un texte grâce à l'IA.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
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
