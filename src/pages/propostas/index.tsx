import Button from '@mui/material/Button'

import { ButtonWrapper, Container } from './styles'

import { TableComponent } from './components/table'
import { FormEditTableModal } from './components/form-edit-table-modal'
import { FormRegisterProposalModal } from './components/form-register-proposal-modal'

import { useModal } from '../../hooks/useModal'

export function Propostas() {
  const formEditTableModalController = useModal()
  const formRegisterProposalModalController = useModal()

  return (
    <Container>
      <ButtonWrapper>
        <Button
          variant='contained'
          onClick={formRegisterProposalModalController.handleOpenModal}
        >
          Cadastrar proposta
        </Button>
        <Button
          variant='contained'
          onClick={formEditTableModalController.handleOpenModal}
        >
          Editar tabela
        </Button>
      </ButtonWrapper>
      <TableComponent />
      <FormEditTableModal
        modalController={formEditTableModalController}
      />
      <FormRegisterProposalModal
        modalController={formRegisterProposalModalController}
      />
    </Container>
  );
}