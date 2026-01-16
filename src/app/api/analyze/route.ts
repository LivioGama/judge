import { NextResponse } from "next/server"
import OpenAI from "openai"

const SYSTEM_PROMPT = `Tu es un expert en analyse comportementale. Tu donnes des réponses concises et percutantes, en 3-4 phrases maximum.`

const ANALYSIS_PROMPT = `Analyse brièvement le texte suivant: décris l'attitude, la posture émotionnelle et l'image renvoyée par l'auteur. Mets en évidence les traits de caractère et la dynamique relationnelle. Réponds de manière fluide et nuancée en 3-4 phrases.

Réponds dans la langue du texte.

Texte:
`

export const POST = async (request: Request) => {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Le texte est requis" },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "Clé API OpenAI non configurée" },
        { status: 500 }
      )
    }

    const openai = new OpenAI({ apiKey })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: ANALYSIS_PROMPT + text },
      ],
      temperature: 0.7,
      max_tokens: 300,
    })

    const analysis = completion.choices[0]?.message?.content || "Aucune analyse disponible."

    return NextResponse.json({ analysis })
  } catch (error) {
    console.error("Erreur d'analyse:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'analyse du texte" },
      { status: 500 }
    )
  }
}
