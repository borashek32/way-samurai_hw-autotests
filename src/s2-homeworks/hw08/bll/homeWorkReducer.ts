import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      if (action.payload === 'up') {
        return state.sort((a, b) => a.name.localeCompare(b.name)) // need to fix
      } else {
        state.sort((a, b) => b.name.localeCompare(a.name))
        return state.sort((a, b) => b.name.localeCompare(a.name)) // need to fix
      }
    }
    case 'check': {
      return state.filter(s => s.age >= 18) // need to fix
    }
    default:
      return state
  }
}
