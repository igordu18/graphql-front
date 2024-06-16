import { IconButton } from '@mui/material'
import { useClientes } from '../../../../contexts/hooks/useClientes'
import { Table } from './styles';
import { Eye } from '@phosphor-icons/react'

export function TableComponent() {
  const { columns, content } = useClientes()
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th key={column}>{column}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {content.map((row) => {
          const keys = Object.keys(row);
          const key = Object.values(row).join('-');
          return (
            <tr key={key}>
              {keys.map((key) => {
                if (key === 'cartoes' || key === 'propostas') {
                  return (
                    <td key={key}>
                      <IconButton title={`${key}`} color="primary" style={{ width: '36.5px', height: '36.5px', borderRadius: '50%' }}>
                        <Eye size={16} />
                      </IconButton>
                    </td>
                  )
                }
                return (
                  <td key={key}>{row[key]}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}