import {OptionType} from "../../hw07/HW7";

const initState: OptionType = {
  id: 1,
  value: 'light'
}
const SET_THEME_ID = 'SET_THEME_ID'

type ActionType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionType): OptionType => { // fix any
  switch (action.type) {
    // дописать
    case SET_THEME_ID:
      // debugger
      return {
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({type: SET_THEME_ID, id}) // fix any
