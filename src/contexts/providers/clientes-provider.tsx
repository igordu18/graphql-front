import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { gql, useMutation, useQuery } from "@apollo/client"
import { toast } from "react-toastify"

import { clientesContext } from "../clientes-context"
import { Cliente, ClienteMutation, ClienteTableForm, ContentCliente } from "../../types/cliente"
import { useModal } from "../../hooks/useModal"
import dayjs from "dayjs"

interface Props {
  children: ReactNode
}

const defaultValuesEditTableForm: ClienteTableForm = {
  id: true,
  nome: true,
  email: false,
  cpf: true,
  dataNascimento: false,
  createdAt: false,
  updatedAt: false,
  propostas: true,
  cartoes: true,
}

export function ClientesProvider({ children }: Props) {
  const formEditTableModalController = useModal()
  const editTableForm = useForm<ClienteTableForm>({ defaultValues: defaultValuesEditTableForm })

  const [columns, setColumns] = useState(['ID', 'Nome', 'CPF', 'Propostas', 'Cartões'])
  const [content, setContent] = useState<ContentCliente[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    console.log(columns)
  }, [columns])

  const columnMapping: { [key: string]: string } = useMemo(() => ({
    id: 'ID',
    nome: 'Nome',
    email: 'E-mail',
    cpf: 'CPF',
    dataNascimento: 'Data de Nascimento',
    createdAt: 'Data de Criação',
    updatedAt: 'Data de Atualização',
    propostas: 'Propostas',
    cartoes: 'Cartões',
  }), [])

  const queryGetClientes = gql`
    query GetClientes {
      clientes {
        ${Object.keys(columnMapping)
          .filter(key => columns.includes(columnMapping[key]))
          .map(key => {
            if (key === 'propostas' || key === 'cartoes') {
              return `${key} { id }`
            }
            return key
          })
          .join('\n')
        }
      }
    }
  `

  const queryClientes = useQuery<{ clientes: Cliente[] }>(queryGetClientes, {
    onCompleted: formEditTableModalController.handleCloseModal
  })

  const extractEnabledColumns = useCallback((columns: { [key: string]: boolean }, columnMapper: { [key: string]: string }) => {
    const enabledColumns = Object.keys(columns)
      .filter(column => columns[column])
      .map(column => columnMapper[column])
    return enabledColumns
  }, [])

  const handleEditTable = useCallback(() => {
    setColumns(extractEnabledColumns(editTableForm.getValues(), columnMapping))
  }, [columnMapping, extractEnabledColumns, editTableForm])

  const fillContent = useCallback((clientes: Cliente[]) => {
    const filledContent = clientes.map(cliente => {
      const contentCliente: ContentCliente = {
        id: cliente.id,
        cpf: cliente.cpf,
        nome: cliente.nome,
        email: cliente.email,
        dataNascimento: cliente.dataNascimento && dayjs(cliente.dataNascimento).format('DD/MM/YYYY'),
        createdAt: cliente.createdAt && dayjs(cliente.createdAt).format('DD/MM/YYYY'),
        updatedAt: cliente.updatedAt && dayjs(cliente.updatedAt).format('DD/MM/YYYY'),
      }
      
      if (cliente.propostas) {
        contentCliente.propostas = cliente.propostas.map(proposta => proposta.id).join(', ')
      }

      if (cliente.cartoes) {
        contentCliente.cartoes = cliente.cartoes.map(cartao => cartao.id).join(', ')
      }

      Object.keys(contentCliente).forEach(key => {
        if (contentCliente[key] === undefined) {
          delete contentCliente[key]
        }
      })
      return contentCliente
    }).filter(contentCliente => Object.keys(contentCliente).length > 0)
    setContent(filledContent)
  }, [])

  useEffect(() => {
    setClientes(queryClientes?.data?.clientes || [])
  }, [queryClientes])

  useEffect(() => {
    fillContent(clientes)
  }, [fillContent, clientes])

  
  const formRegisterClientModalController = useModal()
  const registerClientForm = useForm()

  const mutationRegisterClient = gql`
    mutation createCliente($createClienteInput: CreateClienteInput!) {
      createCliente(createClienteInput: $createClienteInput) {
        cpf
        dataNascimento
        email
        nome
      }
    }
  `

  const [registerClient, mutationCliente] = useMutation<ClienteMutation>(mutationRegisterClient, {
    refetchQueries: [queryGetClientes],
  })

  const handleRegisterClient = useCallback(async () => {
    await registerClient({
      variables: {
        createClienteInput: registerClientForm.getValues(),
      }
    })
      .then((response) => {
        if (response.errors) {
          toast.error('Erro ao criar cliente.')
        } else {
          toast.success('Cliente criado com sucesso!')
        }
        formRegisterClientModalController.handleCloseModal()
      })
    
  }, [registerClient, registerClientForm, formRegisterClientModalController])

  const valueContext = useMemo(() => ({
    columns,
    content,
    mutationCliente,
    handleEditTable,
    editTableForm,
    registerClientForm,
    handleRegisterClient,
    formRegisterClientModalController,
    formEditTableModalController,
  }), [columns, content, mutationCliente, handleEditTable, editTableForm, registerClientForm, handleRegisterClient, formRegisterClientModalController, formEditTableModalController])

  return (
    <clientesContext.Provider value={valueContext}>
      {children}
    </clientesContext.Provider>
  )
}