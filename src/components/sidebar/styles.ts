import styled from "styled-components"

interface ContainerProps {
  $collapsed: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  margin-right: 1rem;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  
  transition: width 0.3s ease;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`