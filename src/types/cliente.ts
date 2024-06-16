
import { Proposta } from "./proposta"

export interface Cliente {
  id: string
  cpf?: string
  nome?: string
  email?: string
  dataNascimento?: string
  createdAt?: Date
  updatedAt?: Date
  propostas?: Proposta[]
  [key: string]: string | string[] | Date | Proposta[] | undefined;
}

export interface ContentCliente {
  id: string
  cpf?: string
  nome?: string
  email?: string
  dataNascimento?: string
  createdAt?: string
  updatedAt?: string
  [key: string]: string | undefined;
}

export interface ClienteMutation {
  cpf: string
  dataNascimento: string
  email: string
  nome: string
}

export interface ClienteTableForm {
  id: boolean
  nome: boolean
  email: boolean
  cpf: boolean
  dataNascimento: boolean
  createdAt: boolean
  updatedAt: boolean
  propostas: boolean
  cartoes: boolean
  [key: string]: boolean
}