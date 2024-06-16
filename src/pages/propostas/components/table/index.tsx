import { usePropostas } from '../../../../contexts/hooks/usePropostas'
import { Table } from './styles';

export function TableComponent() {
  const { columns, content } = usePropostas()
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
          return (
            <tr key={row.id}>
              {keys.map((key) => {
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