import { useContext } from "react"
import { layoutContext } from "../layout-context"

export function useLayout() {
  const context = useContext(layoutContext)

  return context
}