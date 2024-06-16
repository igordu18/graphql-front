import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/sidebar"
import { Container } from "./styles"
import { useLayout } from "../../contexts/hooks/useLayout"
import { ToastContainer } from "react-toastify"

export function DefaultLayout() {
  const { sidebarController } = useLayout()

  return (
    <Container $statusSidebar={sidebarController.statusSidebar} >
      <Sidebar />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </Container>
  )
}