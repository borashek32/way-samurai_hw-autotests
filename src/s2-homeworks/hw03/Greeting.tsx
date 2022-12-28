import React, {
  ChangeEvent,
  FocusEventHandler,
  KeyboardEventHandler
} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
  addUser: (name: string) => void // need to fix any
  onBlur: FocusEventHandler<HTMLInputElement> // need to fix any
  onEnter: KeyboardEventHandler<HTMLInputElement> // need to fix any
  error?: React.ReactNode // need to fix any
  totalUsers: string | number // need to fix any
  lastUserName?: string // need to fix any
  onFocus: FocusEventHandler<HTMLInputElement>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    onEnter,
    onBlur,
    onFocus,
    error,
    totalUsers,
    lastUserName,
  } // деструктуризация пропсов
) => {
  const inputClass = s.input + ' ' + (error ? s.errorInput : '') // need to fix with (?:)

  return (
    <div id={'hw3-form'} className={s.greetingForm}>
      <div className={s.text}>
        {'Людей добавили: '}
        <span id={'hw3-users-total'}>{totalUsers}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={'hw3-input'}
            value={name}
            onChange={(e) => setNameCallback(e)}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </div>

        <button
          id={'hw3-button'}
          onClick={() => addUser(name)}
          className={s.button}
        >
          Add
        </button>
      </div>
      <div id={'hw3-error'} className={s.error}>
        {error}
      </div>
      {lastUserName && (
          <div className={s.greeting}>
              Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
          </div>
      )}
    </div>
  )
}

export default Greeting
