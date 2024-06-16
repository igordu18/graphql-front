import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "../layout/default"
import { LayoutProvider } from "../contexts/providers/layout-provider"

import { Home } from "../pages/home"
import { Clientes } from "../pages/clientes"
import { Propostas } from "../pages/propostas"
import { Cartoes } from "../pages/cartoes"

import { ClientesProvider } from "../contexts/providers/clientes-provider"
import { PropostasProvider } from "../contexts/providers/propostas-provider"
import { CartoesProvider } from "../contexts/providers/cartoes-provider"


export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<LayoutProvider />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/clientes"
            element={
              <ClientesProvider>
                <Clientes />
              </ClientesProvider>
            }
          />
          <Route
            path="/propostas"
            element={
              <PropostasProvider>
                <Propostas />
              </PropostasProvider>
            }
          />
          <Route
            path="/cartoes"
            element={
              <CartoesProvider>
                <Cartoes />
              </CartoesProvider>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}