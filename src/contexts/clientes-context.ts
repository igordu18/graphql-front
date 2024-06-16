import { createContext } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"
import { ClienteMutation, ClienteTableForm, ContentCliente } from "../types/cliente"
import { MutationResult } from "@apollo/client"
import { UseModal } from "../hooks/useModal"

interface ClientesContext {
  columns: string[]
  content: ContentCliente[]
  mutationCliente: MutationResult<ClienteMutation>
  handleEditTable: () => void
  handleRegisterClient: () => void
  editTableForm : UseFormReturn<ClienteTableForm, undefined> // eslint-disable-line
  registerClientForm: UseFormReturn<FieldValues, any, undefined> // eslint-disable-line
  formRegisterClientModalController: UseModal
  formEditTableModalController: UseModal
}

export const clientesContext = createContext({} as ClientesContext)