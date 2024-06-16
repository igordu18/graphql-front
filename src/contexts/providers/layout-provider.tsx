import { useMemo, useState } from "react"
import { layoutContext } from "../layout-context"
import { Outlet } from "react-router-dom"

export function LayoutProvider() {
  const [statusSidebar, setStatusSidebar] = useState(true)

  const sidebarController = useMemo(() => ({
    statusSidebar,
    open: () => setStatusSidebar(true),
    close: () => setStatusSidebar(false),
    toggle: () => setStatusSidebar((state) => !state)
  }), [statusSidebar])

  const valueContext = useMemo(() => ({
    sidebarController,
  }), [sidebarController])


  return (
    <layoutContext.Provider value={valueContext}>
      <Outlet />
    </layoutContext.Provider>
  )
}