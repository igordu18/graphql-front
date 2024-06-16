import Button, { ButtonProps } from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { ElementType } from 'react'
import { ContainerIcon } from './styles'

interface Props extends ButtonProps {
  collapsed: boolean
  icon?: ElementType
}

export function SidebarButton({ collapsed, children, icon: Icon, ...rest }: Props) {
  return collapsed ? (
    <ContainerIcon>
      <IconButton title={`${children}`} color="primary" {...rest} style={{ width: '36.5px', height: '36.5px', borderRadius: '50%' }}>
        {Icon && <Icon size={16} />}
      </IconButton>
    </ContainerIcon>
  ) : (
    <Button 
      variant="outlined"
      startIcon={Icon && <Icon size={16} />}
      fullWidth
      style={{ justifyContent: 'flex-start', alignContent: 'center', lineHeight: '1.5' }}
      {...rest}
    >
      {children}
    </Button>
  )
}