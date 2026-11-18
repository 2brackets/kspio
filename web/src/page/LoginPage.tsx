import LoginBox, { type AuthMode } from '../components/LoginBox'

function LoginPage() {
  const mode: AuthMode = 'open' // Change this to 'local', 'keycloak', or 'open' based on your authentication mode  

  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <LoginBox mode={mode} />
    </main>
  )
}

export default LoginPage
