import { BrowserRouter } from "react-router-dom"
import { PublicRoutes } from "./public.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}