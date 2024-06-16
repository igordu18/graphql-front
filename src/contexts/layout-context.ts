import { createContext } from "react"

interface SidebarController {
  statusSidebar: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

interface LayoutContext {
  sidebarController: SidebarController
}

export const layoutContext = createContext({} as LayoutContext)