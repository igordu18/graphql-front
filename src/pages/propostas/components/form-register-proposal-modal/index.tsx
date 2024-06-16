import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Content, Form, Title } from './styles'
import { Button } from '@mui/material'
import { Controller } from 'react-hook-form'
import { usePropostas } from '../../../../contexts/hooks/usePropostas'


interface Props {
  modalController: {
    isModalOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
  }
}

export function FormRegisterProposalModal(props: Props) {
  const { registerProposalForm: { handleSubmit, control }, handleRegisterProposal } = usePropostas()
  return (
    <Dialog
      open={props.modalController.isModalOpen}
      onClose={props.modalController.handleCloseModal}
      fullWidth
      maxWidth="sm"
    >
      <Title>
        Cadastrar proposta
      </Title>
      <Content>
        <Form id='edit-table-client' onSubmit={handleSubmit(handleRegisterProposal)}>
        <Controller 
          render={({ field }) => 
            <>
              <InputLabel id="tipo-label">Tipo do cartão</InputLabel>
              <Select
                {...field}
                labelId="tipo-label"
                id="tipo-label"
              >
                <MenuItem value="" disabled>Selecione um item</MenuItem>
                <MenuItem value="debito">Débito</MenuItem>
                <MenuItem value="credito">Crédito</MenuItem>
              </Select>
            </>
          }
          name="tipo"
          control={control}
          defaultValue=""
        />
        <Controller 
          render={({ field }) => 
            <>
              <InputLabel id="tipo-label">Tipo do cartão</InputLabel>
              <Select
                {...field}
                labelId="tipo-label"
                id="tipo-label"
              >
                <MenuItem value="" disabled>Selecione um item</MenuItem>
                <MenuItem value="debito">Débito</MenuItem>
                <MenuItem value="credito">Crédito</MenuItem>
              </Select>
            </>
          }
          name="tipo"
          control={control}
          defaultValue=""
        />
        <Controller 
          render={({ field }) => 
            <>
              <InputLabel id="modalidade-label">Modalidade do cartão</InputLabel>
              <Select
                {...field}
                labelId="modalidade-label"
                id="modalidade-label"
              >
                <MenuItem value="" disabled>Selecione um item</MenuItem>
                <MenuItem value="debito">Gold</MenuItem>
                <MenuItem value="credito">Platinum</MenuItem>
              </Select>
            </>
          }
          name="modalidade"
          control={control}
          defaultValue=""
        />
        </Form>
      </Content>
      <DialogActions>
        <Button
          type='button'
          onClick={props.modalController.handleCloseModal}
        >
          Cancelar
        </Button>
        <Button
          variant='contained'
          type='submit'
          form='edit-table-client'
        >
          Aplicar
        </Button>
      </DialogActions>
    </Dialog>
  )
}