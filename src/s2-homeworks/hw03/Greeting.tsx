import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler, ReactNode,
} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: ChangeEventHandler<HTMLInputElement> // need to fix any
  addUser: (name: string) => void // need to fix any
  onBlur: FocusEventHandler<HTMLInputElement> // need to fix any
  onEnter: KeyboardEventHandler<HTMLInputElement> // need to fix any
  error: React.ReactNode // need to fix any
  totalUsers: () => number // need to fix any
  lastUserName?: () => ReactNode // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    onEnter,
    onBlur,
    error,
    totalUsers,
    lastUserName,
  } // деструктуризация пропсов
) => {
  // const inputClass = s.errorInput // need to fix with (?:)
  const inputClass = () => {
    let inputClassName
    if (error) {
      inputClassName = s.errorInput
    } else {
      inputClassName = s.input
    }
    return inputClassName;
  }

  // const lastName = () => {
  //   if (lastUserName.lenght > 0) {
  //     return (
  //       <div className={s.greeting}>
  //         Привет <span id={'hw3-last-user'}>{lastUserName()}</span>!
  //       </div>
  //     )
  //   }
  // }

  return (
    <div id={'hw3-form'} className={s.greetingForm}>
      <div className={s.text}>
        {'Людей добавили: '}
        <span id={'hw3-users-total'}>{totalUsers()}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={'hw3-input'}
            value={name}
            onChange={setNameCallback}
            className={inputClass()}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
        </div>

        <button
          id={'hw3-button'}
          onClick={() => addUser(name)}
          className={s.button}
          disabled={!name.trim()}
        >
          Add
        </button>
      </div>
      <div id={'hw3-error'} className={s.error}>
        {error}
      </div>
      {/*{lastName}*/}
      {lastUserName && (
          <div className={s.greeting}>
              Привет <span id={'hw3-last-user'}>{lastUserName()}</span>!
          </div>
      )}
    </div>
  )
}

export default Greeting
