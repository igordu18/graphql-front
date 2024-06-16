import { useContext } from "react"
import { clientesContext } from "../clientes-context"

export function useClientes() {
  const context = useContext(clientesContext)

  return context
}