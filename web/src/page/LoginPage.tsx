import { useEffect, useState } from 'react'
import { apiClient } from '../api/ApiClient'
import LoginBox, { type AuthMode } from '../components/LoginBox'

  async function getAuthMode(): Promise<AuthMode> {
    const response = await apiClient.get<{ mode: AuthMode }>('/api/auth/config')
    return response.mode
  }

function LoginPage() {
  const [mode, setMode] = useState<AuthMode | null>(null)

  useEffect(() => {
    getAuthMode()
    .then(setMode).catch((error) => {
      console.error('Failed to fetch auth mode:', error)
    })
  }, [])


  return (
    <main className="flex flex-1 items-center justify-center p-4">
      {mode && <LoginBox mode={mode} />}
    </main>
  )
}

export default LoginPage
