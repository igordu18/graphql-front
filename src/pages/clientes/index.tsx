import Button from '@mui/material/Button'

import { ButtonWrapper, Container } from './styles'

import { TableComponent } from './components/table'
import { FormEditTableModal } from './components/form-edit-table-modal'
import { FormRegisterClientModal } from './components/form-register-client-modal'

import { useClientes } from '../../contexts/hooks/useClientes'

export function Clientes() {
  const { formRegisterClientModalController, formEditTableModalController } = useClientes()

  return (
    <Container>
      <ButtonWrapper>
        <Button
          variant='contained'
          onClick={formRegisterClientModalController.handleOpenModal}
        >
          Cadastrar cliente
        </Button>
        <Button
          variant='contained'
          onClick={formEditTableModalController.handleOpenModal}
        >
          Editar tabela
        </Button>
      </ButtonWrapper>
      <TableComponent />
      <FormEditTableModal />
      <FormRegisterClientModal />
    </Container>
  );
}