interface AuthState {
  isLogged: boolean
  isLoading: boolean
  userInfos: {
    firstname: string
    lastname: string
    email: string
    password: string
  }
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_LOADING = 'SET_LOADING'
export const UPDATE_USER_INFOS = 'UPDATE_USER_INFOS'

export const initState: AuthState = {
  isLogged: false,
  isLoading: false,
  userInfos: { firstname: '', lastname: '', email: '', password: '' }
}

export const authReducer = (
  state: AuthState,
  action: { type: string, payload: any }
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        userInfos: { ...state.userInfos, ...action.payload }
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_USER_INFOS:
      return {
        ...state,
        isLoading: false,
        userInfos: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        userInfos: { firstname: '', lastname: '', email: '', password: '' }
      }
    default:
      return state
  }
}
