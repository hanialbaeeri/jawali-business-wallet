import { useLocalStorage } from './useLocalStorage'
import { Settings, defaultSettings } from '@/types'

const SETTINGS_KEY = 'app_settings'

export function useSettings() {
  const [settings, setSettings, resetSettings] = useLocalStorage<Settings>(
    SETTINGS_KEY,
    defaultSettings
  )

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings({ ...settings.value, ...updates })
  }

  const toggleDarkMode = () => {
    setSettings({ ...settings.value, darkMode: !settings.value.darkMode })
  }

  const toggleNotifications = () => {
    setSettings({ ...settings.value, notifications: !settings.value.notifications })
  }

  const setLanguage = (language: Settings['language']) => {
    setSettings({ ...settings.value, language })
  }

  const setCurrency = (currency: string) => {
    setSettings({ ...settings.value, currency })
  }

  const setDailyLimit = (dailyLimit: number) => {
    setSettings({ ...settings.value, dailyLimit })
  }

  return {
    settings,
    updateSettings,
    toggleDarkMode,
    toggleNotifications,
    setLanguage,
    setCurrency,
    setDailyLimit,
    resetSettings: () => resetSettings(),
  }
}
