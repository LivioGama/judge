import { TextAnalyzer } from "@/components/TextAnalyzer"

const HomePage = () => (
  <main className="min-h-screen flex flex-col items-center px-4 py-8">
    <div className="w-full max-w-3xl mx-auto">
      <TextAnalyzer />

      <footer className="mt-12 text-center text-foreground/40 text-xs">
        <p>Propulsé par OpenAI • Inspiré par goblin.tools</p>
      </footer>
    </div>
  </main>
)

export default HomePage
