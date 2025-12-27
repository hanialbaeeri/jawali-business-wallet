import { useLocalStorage } from './useLocalStorage'
import { Transfer } from '@/types'
import { computed } from 'vue'

const TRANSFERS_KEY = 'app_transfers'

export function useTransfers() {
  const [transfers, setTransfers, clearTransfers] = useLocalStorage<Transfer[]>(TRANSFERS_KEY, [])

  const addTransfer = (transfer: Omit<Transfer, 'id' | 'date'>) => {
    const newTransfer: Transfer = {
      ...transfer,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    }
    setTransfers([newTransfer, ...transfers.value])
    return newTransfer
  }

  const updateTransfer = (id: string, updates: Partial<Transfer>) => {
    setTransfers(
      transfers.value.map((t) => (t.id === id ? { ...t, ...updates } : t))
    )
  }

  const deleteTransfer = (id: string) => {
    setTransfers(transfers.value.filter((t) => t.id !== id))
  }

  const getTransferById = (id: string) => {
    return transfers.value.find((t) => t.id === id)
  }

  const getTotalAmount = (status?: Transfer['status']) => {
    return computed(() =>
      transfers.value
        .filter((t) => !status || t.status === status)
        .reduce((sum, t) => sum + t.amount, 0)
    ).value
  }

  return {
    transfers,
    addTransfer,
    updateTransfer,
    deleteTransfer,
    getTransferById,
    getTotalAmount,
    clearTransfers,
  }
}
