import styled from "styled-components"

interface ContainerProps {
  $statusSidebar: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ $statusSidebar }) => $statusSidebar ? "200px 1fr" : "68.5px 1fr"}
`