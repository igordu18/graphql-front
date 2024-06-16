export interface Proposta {
  id: string
  status?: string
  etapa?: string
  createdAt?: Date
  updatedAt?: Date
  clienteId?: string
  [key: string]: string | string[] | Date | undefined;
}

export interface ContentProposta {
  id: string
  status?: string
  etapa?: string
  createdAt?: string
  updatedAt?: string
  clienteId?: string
  cartaoId?: string
  [key: string]: string | undefined;
}