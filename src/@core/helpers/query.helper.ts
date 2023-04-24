import { QueryFunction, useQuery } from '@tanstack/react-query'

/**
 * Wrapper hook use for useQuery with react query
 * @param queryKey
 * @param queryFunction
 * @param options
 */
function useAppQuery(queryKey: any, queryFunction: QueryFunction<any, any>, options: any = {}) {
  const { onError } = options
  return useQuery(queryKey, queryFunction, { ...options, useErrorBoundary: !!onError })
}

export { useAppQuery }
