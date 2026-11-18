import { LuLogIn, LuHandMetal, LuSend, LuKeyRound } from 'react-icons/lu'

export type AuthMode = 'local' | 'keycloak' | 'open'

type LoginBoxProps = {
  mode: AuthMode
}

type LoginFormProps = {
  submitLabel: string
}

function LoginForm({ submitLabel }: LoginFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <label className="form-control w-full">
        <span className="label-text mb-2">Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@example.com"
          className="input input-bordered w-full"
          required
        />
      </label>
      <label className="form-control w-full">
        <span className="label-text mb-2">Password</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
      </label>
      <button type="submit" className="btn btn-accent w-full text-white">
        <LuLogIn className="h-5 w-5" />
        {submitLabel}
      </button>
    </form>
  )
}

function LoginBox({ mode }: LoginBoxProps) {
  const isOpenMode = mode === 'open'
  const isKeycloakMode = mode === 'keycloak'

  return (
    <section
      className="card w-full max-w-sm border border-base-300 bg-base-100 shadow-xl"
      data-auth-mode={mode}
    >
      <div className="card-body">
        <h2 className="card-title">
            <LuHandMetal className="h-6 w-6 text-accent" />
            Welcome
        </h2>
        {isOpenMode ? (
          <div className="flex flex-col gap-3">
            <button type="button" className="btn btn-accent w-full text-white">
              <LuSend className="h-5 w-5" />
              Send a secret
            </button>
            <details className="collapse collapse-arrow rounded-box bg-base-100 duration-300 ease-in-out">
              <summary className="collapse-title min-h-0 px-4 py-3 font-medium">
                Sign in as admin
              </summary>
              <div className="collapse-content">
                <LoginForm submitLabel="Sign in as admin" />
              </div>
            </details>
          </div>
        ) : isKeycloakMode ? (
          <button type="button" className="btn btn-accent w-full text-white">
            <LuKeyRound className="h-5 w-5" />
            Sign in with Keycloak
          </button>
        ) : (
          <LoginForm submitLabel="Sign in" />
        )}
      </div>
    </section>
  )
}

export default LoginBox