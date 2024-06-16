import styled from "styled-components"

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

export const Title = styled(DialogTitle)`
  text-align: center;
`

export const Content = styled(DialogContent)``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 0.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  align-items: center;

  label {
    cursor: pointer;
    user-select: none;
  }
`