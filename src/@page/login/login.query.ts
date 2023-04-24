import { useMutation } from '@tanstack/react-query'
import { LoginInDto } from './login.type'

/**
 * Use submit login mutation
 */
function useSubmitLogin() {
  return useMutation({
    mutationFn: async (inDto: LoginInDto) => {
      const { companyCode, username, password } = inDto
      if (companyCode === 'cmc' && username === 'tommy' && password === 'TheKing@1997') {
        return Promise.resolve({
          accessToken:
            'eyJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJUb21teSIsImNvbXBhbnkiOjEsImlhdCI6MTY4MjA0MTAwNSwiZXhwIjoxNjgyMTI3NDA1fQ.FY289xWlbAwn0CsE-WGS3ELcuIlH8uJj1TzhAvnEcDXQQ2NreptrSDZ5X-EmeNGk0LylVdhO0Snazu9sEyWtUA'
        })
      }
      return Promise.reject(new Error('Username or password incorrect!'))
    }
  })
}

export { useSubmitLogin }
