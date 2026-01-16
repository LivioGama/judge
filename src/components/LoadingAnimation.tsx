"use client"

const loadingItems = [
  { message: "Examen du texte...", width: 75 },
  { message: "Analyse des émotions...", width: 82 },
  { message: "Évaluation du ton...", width: 68 },
  { message: "Détection de l'attitude...", width: 88 },
  { message: "Formulation du verdict...", width: 72 }
]

export const LoadingAnimation = () => (
  <div className="glass-card p-8 text-center animate-fade-in-up">
    <div className="mb-6">
      <div className="inline-block relative">
        <span className="text-6xl animate-float">⚖️</span>
        <div className="absolute -inset-4 rounded-full animate-pulse-glow opacity-50" />
      </div>
    </div>

    <div className="space-y-3">
      {loadingItems.map((item, i) => (
        <div
          key={item.message}
          className="loading-shimmer h-4 rounded-full mx-auto"
          style={{
            width: `${item.width}%`,
            animationDelay: `${i * 0.2}s`,
            opacity: 0.4 + i * 0.15
          }}
        />
      ))}
    </div>

    <p className="mt-6 text-foreground/60 animate-pulse">
      Le Juge délibère...
    </p>
  </div>
)
