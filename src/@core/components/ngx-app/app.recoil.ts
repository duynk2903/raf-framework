import { atom, selector } from 'recoil'
import { String } from '@core/enums/common.enum'
import { AtomKey, RecoilSelectorKey } from '@core/enums/atom.enum'
import { NgxApplicationState } from '@core/components/ngx-app/app.type'

/**
 * Application wrapper initial state
 */
const applicationInitialState: NgxApplicationState = {
  authorization: {
    username: String.EMPTY_STRING,
    companyId: null,
    accessToken: String.EMPTY_STRING,
    iat: 0,
    exp: 0,
    authority: String.EMPTY_STRING,
    isAdmin: true
  },
  sidebar: {
    collapsed: false,
    isEnabled: true,
    selectedKey: [],
    openKeys: []
  },
  isLoading: false
}

/**
 * Application recoil state
 */
const applicationState = atom({
  key: AtomKey.APPLICATION_STATE,
  default: applicationInitialState
})

/**
 * Authorization selector
 */
const authorizationSelector = selector({
  key: RecoilSelectorKey.AUTHORIZATION_SELECTOR,
  get: ({ get }) => {
    const { authorization } = get(applicationState)
    return authorization
  },
  set: ({ get, set }, authorization: any) => {
    const applicationWrapperState = get(applicationState)
    set(applicationState, {
      ...applicationWrapperState,
      authorization: {
        ...authorization
      }
    })
  }
})

/**
 * Sidebar selector
 */
const sidebarSelector = selector({
  key: RecoilSelectorKey.SIDEBAR_SELECTOR,
  get: ({ get }) => {
    const { sidebar } = get(applicationState)
    return sidebar
  },
  set: ({ get, set }, state: any) => {
    const applicationWrapperState = get(applicationState)
    set(applicationState, {
      ...applicationWrapperState,
      sidebar: {
        ...state
      }
    })
  }
})

export { applicationState, authorizationSelector, applicationInitialState, sidebarSelector }
