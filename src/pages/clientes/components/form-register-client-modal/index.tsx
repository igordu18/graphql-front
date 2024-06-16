import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { Content, Form, Title } from './styles'
import { Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller } from 'react-hook-form'
import { useClientes } from '../../../../contexts/hooks/useClientes'


export function FormRegisterClientModal() {
  const {
    registerClientForm: { handleSubmit, control },
    handleRegisterClient,
    mutationCliente,
    formRegisterClientModalController
  } = useClientes()

  return (
    <Dialog
      open={formRegisterClientModalController.isModalOpen}
      onClose={formRegisterClientModalController.handleCloseModal}
    >
      <Title>
        Cadastro de Cliente
      </Title>
      <Content>
        <Form id='register-client' onSubmit={handleSubmit(handleRegisterClient)}>
          <Controller 
            render={({ field }) => 
              <TextField
                {...field}
                label="CPF"
                variant="outlined"
                type="text"
                inputProps={{ maxLength: 11 }}
              />
            }
            name="cpf"
            control={control}
            defaultValue=""
          />
          <Controller 
            render={({ field }) => 
              <TextField
                {...field}
                label="Nome"
                variant="outlined"
                type="text"
              />
            }
            name="nome"
            control={control}
            defaultValue=""
          />
          <Controller 
            render={({ field }) => 
              <TextField
                {...field}
                label="E-mail"
                variant="outlined"
                type="email"
              />
            }
            name="email"
            control={control}
            defaultValue=""
          />
          <Controller 
            render={({ field }) => 
              <TextField
                {...field}
                label="Data de Nascimento"
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            }
            name="dataNascimento"
            control={control}
            defaultValue=""
          />
        </Form>
      </Content>
      <DialogActions>
        <Button
          type='button'
          onClick={formRegisterClientModalController.handleCloseModal}
          disabled={mutationCliente.loading}
        >
          Cancelar
        </Button>
        <LoadingButton
          variant='contained'
          type='submit'
          form='register-client'
          disabled={mutationCliente.loading}
          loading={mutationCliente.loading}
        >
          Cadastrar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}