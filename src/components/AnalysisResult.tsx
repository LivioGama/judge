"use client"

import { useEffect, useState } from "react"

type AnalysisResultProps = {
  result: string
}

export const AnalysisResult = ({ result }: AnalysisResultProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)
    
    let index = 0
    const interval = setInterval(() => {
      if (index < result.length) {
        setDisplayedText(result.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 12)

    return () => clearInterval(interval)
  }, [result])

  return (
    <div className="result-card p-5 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">⚖️</span>
        <h2 className="text-lg font-bold gradient-text">Verdict</h2>
      </div>

      <p className="text-base leading-relaxed text-foreground/90 whitespace-pre-wrap">
        {displayedText}
        {!isComplete && (
          <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
        )}
      </p>
    </div>
  )
}
