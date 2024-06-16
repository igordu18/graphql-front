import { useContext } from "react"
import { propostasContext } from "../propostas-context"

export function usePropostas() {
  const context = useContext(propostasContext)

  return context
}