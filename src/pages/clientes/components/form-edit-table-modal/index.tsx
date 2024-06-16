import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Checkbox from '@mui/material/Checkbox';
import { Content, Form, Title, FormControlCheckbox } from './styles'
import { Button } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useClientes } from '../../../../contexts/hooks/useClientes'

export function FormEditTableModal() {
  const {
    editTableForm: { control, handleSubmit },
    handleEditTable,
    formEditTableModalController,
  } = useClientes()
  return (
    <Dialog
      open={formEditTableModalController.isModalOpen}
      onClose={formEditTableModalController.handleCloseModal}
    >
      <Title>
        Inclua/remova as colunas da tabela
      </Title>
      <Content>
        <Form id='edit-table-client' onSubmit={handleSubmit(handleEditTable)}>
          <Controller 
            render={({ field }) => 
              {
                console.log(field)
                return (
                  <FormControlCheckbox 
                    control={<Checkbox {...field} />}
                    label="ID"
                  />
                )
              }
            }
            name="id"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="Nome"
              />
            }
            name="nome"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="E-mail"
              />
            }
            name="email"
            control={control}
            defaultValue={false}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="CPF"
              />
            }
            name="cpf"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="Data de Nascimento"
              />
            }
            name="dataNascimento"
            control={control}
            defaultValue={false}
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
                control={<Checkbox {...field} />}
                label="Propostas"
              />
            }
            name="propostas"
            control={control}
            defaultValue={true}
          />
          <Controller 
            render={({ field }) => 
              <FormControlCheckbox 
                control={<Checkbox {...field} />}
                label="Cartões"
              />
            }
            name="cartoes"
            control={control}
            defaultValue={true}
          />
        </Form>
      </Content>
      <DialogActions>
        <Button
          type='button'
          onClick={formEditTableModalController.handleCloseModal}
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