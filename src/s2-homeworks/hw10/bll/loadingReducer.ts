const initState: { isLoading: boolean } = {
  isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): { isLoading: boolean } => { // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case 'CHANGE_LOADING': {
      // console.log(action, !action.isLoading)
// debugger
      return {
        isLoading: !action.isLoading
      }
    }
    default:
      return { isLoading: false }
  }
}

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
  return {type: 'CHANGE_LOADING', isLoading} as const
}