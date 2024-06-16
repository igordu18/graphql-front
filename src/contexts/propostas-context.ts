import { createContext } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { ContentProposta } from "../types/proposta"

interface PropostasContext {
  columns: string[]
  content: ContentProposta[]
  handleEditTable: () => void
  handleRegisterProposal: () => void
  editTableForm: UseFormReturn<FieldValues, any, undefined> // eslint-disable-line
  registerProposalForm: UseFormReturn<FieldValues, any, undefined> // eslint-disable-line
}
export const propostasContext = createContext({} as PropostasContext)