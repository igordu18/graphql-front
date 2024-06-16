import { useMemo, useState } from "react"

export interface UseModal {
  isModalOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
}

export function useModal(): UseModal {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  const valueReturn = useMemo(() => ({
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  }), [isModalOpen])

  return valueReturn
}