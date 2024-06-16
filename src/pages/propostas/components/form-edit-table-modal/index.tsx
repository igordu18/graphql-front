import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Checkbox from '@mui/material/Checkbox';
import { Content, Form, Title, FormControlCheckbox } from './styles'
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

export function FormEditTableModal(props: Props) {
  const { editTableForm: { handleSubmit, control }, handleEditTable } = usePropostas()
  return (
    <Dialog
      open={props.modalController.isModalOpen}
      onClose={props.modalController.handleCloseModal}
    >
      <Title>
        Inclua/remova as colunas da tabela
      </Title>
      <Content>
        <Form id='edit-table-proposal' onSubmit={handleSubmit(handleEditTable)}>
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} defaultChecked={true} />}
                label="ID"
              />
            }
            name="id"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} defaultChecked={true} />}
                label="Status"
              />
            }
            name="status"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} defaultChecked={true} />}
                label="Etapa"
              />
            }
            name="etapa"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="Data de Criação"
              />
            }
            name="createdAt"
            control={control}
            defaultValue={false}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="Data de Atualização"
              />
            }
            name="updatedAt"
            control={control}
            defaultValue={false}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} defaultChecked={true} />}
                label="ID do Cliente"
              />
            }
            name="clienteId"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} defaultChecked={true} />}
                label="ID do Cartão"
              />
            }
            name="cartaoId"
            control={control}
            defaultValue={true}
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
          form='edit-table-proposal'
        >
          Aplicar
        </Button>
      </DialogActions>
    </Dialog>
  )
}