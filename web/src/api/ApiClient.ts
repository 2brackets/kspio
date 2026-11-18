export type ApiParams = Record<
  string,
  string | number | boolean | null | undefined
>

export class ApiError extends Error {
  readonly status: number

  constructor(status: number) {
    super(`API request failed with status ${status}`)
    this.name = 'ApiError'
    this.status = status
  }
}

export class ApiClient {
  private readonly baseUrl: string

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl.replace(/\/+$/, '')
  }

  get<TResponse>(endpoint: string, params?: ApiParams): Promise<TResponse> {
    return this.request<TResponse>('GET', endpoint, params)
  }

  post<TResponse>(
    endpoint: string,
    body: unknown,
    params?: ApiParams,
  ): Promise<TResponse> {
    return this.request<TResponse>('POST', endpoint, params, body)
  }

  put<TResponse>(
    endpoint: string,
    body: unknown,
    params?: ApiParams,
  ): Promise<TResponse> {
    return this.request<TResponse>('PUT', endpoint, params, body)
  }

  delete<TResponse>(endpoint: string, params?: ApiParams): Promise<TResponse> {
    return this.request<TResponse>('DELETE', endpoint, params)
  }

  private async request<TResponse>(
    method: string,
    endpoint: string,
    params?: ApiParams,
    body?: unknown,
  ): Promise<TResponse> {
    const url = new URL(
      `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}`,
      window.location.origin,
    )

    for (const [key, value] of Object.entries(params ?? {})) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value))
      }
    }

    const response = await fetch(url, {
      method,
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })

    if (!response.ok) {
      throw new ApiError(response.status)
    }

    if (response.status === 204) {
      return undefined as TResponse
    }

    return await response.json() as TResponse
  }
}

export const apiClient = new ApiClient()
