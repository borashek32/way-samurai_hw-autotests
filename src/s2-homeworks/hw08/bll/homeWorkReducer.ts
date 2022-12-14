import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      let newState
      if (action.payload === 'up') {
        newState = state.sort((a, b) => a.name.localeCompare(b.name))
        return newState // need to fix
      } else {
        newState = state.sort((a, b) => b.name.localeCompare(a.name))
        return newState // need to fix
      }
    }
    case 'check': {
      let newState
      newState = state.sort((a, b) => a.name.localeCompare(b.name))
      return newState.filter(s => s.age >= action.payload) // need to fix
    }
    default:
      return state
  }
}
