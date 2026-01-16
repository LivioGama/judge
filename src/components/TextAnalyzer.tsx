"use client"

import { useAnalyzeText } from "@/hooks/useAnalyzeText"
import { useState } from "react"
import { AnalysisResult } from "./AnalysisResult"
import { LoadingAnimation } from "./LoadingAnimation"

export const TextAnalyzer = () => {
  const [text, setText] = useState("")
  const [isExpanded, setIsExpanded] = useState(true)
  const { analyze, analysisResult, isAnalyzing, reset } = useAnalyzeText()

  const hasResult = !!analysisResult && !isAnalyzing

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      analyze(text)
      setIsExpanded(false)
    }
  }

  const handleClear = () => {
    setText("")
    reset()
    setIsExpanded(true)
  }

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault()
      if (text.trim() && !isAnalyzing) {
        analyze(text)
        setIsExpanded(false)
      }
    }
  }

  return (
    <div className="space-y-4">
      {!hasResult && (
        <header className="text-center mb-6 animate-fade-in-up">
          <span className="text-4xl animate-float inline-block mb-2">🧑‍⚖️</span>
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Le Juge</span>
          </h1>
          <p className="text-base text-foreground/60 max-w-md mx-auto">
            Analysez l&apos;attitude et la posture émotionnelle d&apos;un texte
          </p>
        </header>
      )}

      {hasResult && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🧑‍⚖️</span>
          <h1 className="text-xl font-bold gradient-text">Le Juge</h1>
        </div>
      )}

      <div className={`glass-card ${hasResult ? "p-4" : "p-6"} transition-all duration-300`}>
        {isExpanded && !hasResult ? (
          <div className="mb-4">
            <label htmlFor="text-input" className="block text-base font-medium mb-2 text-foreground/90">
              Texte à analyser
            </label>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Collez ou tapez le texte... (⌘+Enter pour analyser)"
              className="glow-input w-full h-40 p-3 text-base resize-none text-foreground placeholder:text-foreground/40"
              disabled={isAnalyzing}
            />
          </div>
        ) : hasResult ? (
          <div
            onClick={handleExpand}
            className="text-sm text-foreground/60 cursor-pointer hover:text-foreground/80 transition-colors line-clamp-2 flex items-start gap-2"
          >
            <span className="text-foreground/40 shrink-0">📝</span>
            <span className="italic">{text}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleExpand()
              }}
              className="shrink-0 text-primary hover:text-primary-light ml-auto"
            >
              ✏️
            </button>
          </div>
        ) : (
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Collez ou tapez le texte... (⌘+Enter pour analyser)"
            className="glow-input w-full h-40 p-3 text-base resize-none text-foreground placeholder:text-foreground/40"
            disabled={isAnalyzing}
          />
        )}

        {(!hasResult || isExpanded) && (
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!text.trim() || isAnalyzing}
              className="glow-button flex-1 py-2.5 px-4 text-sm flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <span className="animate-spin">⚖️</span>
                  Analyse...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  Analyser
                </>
              )}
            </button>

            {text && (
              <button
                type="button"
                onClick={handleClear}
                disabled={isAnalyzing}
                className="py-2.5 px-4 text-sm rounded-xl border border-foreground/20 text-foreground/60 hover:bg-foreground/5 transition-colors disabled:opacity-50"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {isAnalyzing && <LoadingAnimation />}

      {hasResult && (
        <div className="space-y-3">
          <AnalysisResult result={analysisResult} />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                if (text.trim()) {
                  analyze(text)
                }
              }}
              className="glow-button flex-1 py-2.5 px-4 text-sm"
            >
              🔄 Réanalyser
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="py-2.5 px-4 text-sm rounded-xl border border-foreground/20 text-foreground/60 hover:bg-foreground/5 transition-colors"
            >
              Nouveau texte
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
