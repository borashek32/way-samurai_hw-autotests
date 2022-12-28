import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      if (action.payload === 'up') {
        state.sort((a, b) => a.name.localeCompare(b.name))
        return state // need to fix
      } else {
        state.sort((a, b) => b.name.localeCompare(a.name))
        return state // need to fix
      }
    }
    case 'check': {
      const newState = state.filter(s => s.age >= 18)
      return newState // need to fix
    }
    default:
      return state
  }
}
