import { ThemeProvider } from "@mui/material"
import { Routes } from "./routes"
import { GlobalStyle } from "./styles/global"
import { theme } from "./styles/mui"
import { ApolloProvider } from "@apollo/client"
import { client } from "./libs/apollo-client"

export function App() {
  return (
    <ApolloProvider client={client}>      
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
    </ApolloProvider>
  )
}
