import { ReactNode, useCallback, useMemo, useState } from "react"
import { useForm } from "react-hook-form"

import { ContentProposta } from "../../types/proposta"
import { propostasContext } from "../propostas-context"

interface Props {
  children: ReactNode
}

export function PropostasProvider({ children }: Props) {
  const editTableForm = useForm()
  const registerProposalForm = useForm()

  const [columns, setColumns] = useState(['ID', 'Status', 'Etapa', 'ID do Cliente', 'ID do Cartão'])
  const [content] = useState<ContentProposta[]>([])

  const columnMapping: { [key: string]: string } = useMemo(() => ({
    id: 'ID',
    status: 'Status',
    etapa: 'Etapa',
    createdAt: 'Data de Criação',
    updatedAt: 'Data de Atualização',
    clienteId: 'ID do Cliente',
    cartaoId: 'ID do Cartão',
  }), [])

  const extractEnabledColumns = useCallback((columns: { [key: string]: boolean }, columnMapper: { [key: string]: string }) => {
    const enabledColumns = Object.keys(columns)
      .filter(column => columns[column])
      .map(column => columnMapper[column])
    return enabledColumns
  }, [])

  const handleEditTable = useCallback(() => {
    setColumns(extractEnabledColumns(editTableForm.getValues(), columnMapping))
  }, [columnMapping, extractEnabledColumns, editTableForm])

  const handleRegisterProposal = useCallback(() => {
    
  }, [])



  const valueContext = useMemo(() => ({
    columns,
    content,
    handleEditTable,
    editTableForm,
    registerProposalForm,
    handleRegisterProposal,
  }), [columns, content, handleEditTable, editTableForm, registerProposalForm, handleRegisterProposal])


  return (
    <propostasContext.Provider value={valueContext}>
      {children}
    </propostasContext.Provider>
  )
}