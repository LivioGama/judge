"use client"

import { useMutation } from "@tanstack/react-query"
import axios from "axios"

type AnalyzeResponse = {
  analysis: string
}

const analyzeText = async (text: string): Promise<string> => {
  const { data } = await axios.post<AnalyzeResponse>("/api/analyze", { text })
  return data.analysis
}

export const useAnalyzeText = () => {
  const { mutate, data, isPending, reset } = useMutation({
    mutationFn: analyzeText,
  })

  return {
    analyze: mutate,
    analysisResult: data,
    isAnalyzing: isPending,
    reset,
  }
}
