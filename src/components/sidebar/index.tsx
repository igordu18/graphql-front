import IconButton from '@mui/material/IconButton'
import { CaretLeft, CaretRight, CreditCard, House, User, Wallet } from '@phosphor-icons/react'

import { useLayout } from "../../contexts/hooks/useLayout"
import { Container, Header } from "./styles"
import { SidebarButton } from './components/button'
import { useNavigate } from 'react-router-dom'

export function Sidebar() {
  const { sidebarController } = useLayout()
  const navigate = useNavigate()

  const collapsed = !sidebarController.statusSidebar

  return (
    <Container $collapsed={collapsed}>
      <Header>
        <IconButton onClick={sidebarController.toggle}>
          {sidebarController.statusSidebar ? <CaretLeft size={16} /> : <CaretRight size={16} />}
        </IconButton>
      </Header>
      <SidebarButton
        collapsed={collapsed}
        icon={House}
        onClick={() => navigate('/')}
      >
        Início
      </SidebarButton>
      <SidebarButton
        collapsed={collapsed}
        icon={User}
        onClick={() => navigate('/clientes')}
      >
        Clientes
      </SidebarButton>
      <SidebarButton
        collapsed={collapsed}
        icon={Wallet}
        onClick={() => navigate('/propostas')}
      >
        Propostas
      </SidebarButton>
      <SidebarButton
        collapsed={collapsed}
        icon={CreditCard}
        onClick={() => navigate('/cartoes')}
      >
        Cartões
      </SidebarButton>
    </Container>
  )
}