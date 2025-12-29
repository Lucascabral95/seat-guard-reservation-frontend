export function createResourceMock<T>({
  value = [] as T,
  loading = false,
  error = false,
} = {}) {
  return {
    value: () => value,
    isLoading: () => loading,
    error: () => error,
    status: () =>
      error ? 'error' : loading ? 'loading' : 'success',
    reload: () => Promise.resolve(undefined as unknown as void),
  };
}
