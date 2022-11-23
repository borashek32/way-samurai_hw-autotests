import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
// import user from "../hw08/User";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
  name: string,
  setError: Dispatch<SetStateAction<string>>,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void) =>
{
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (!name || name.trim() == "") {
    setError('Ошибка! Введите имя!')
  } else {
    addUserCallback(name.trim())
    // console.log(name)
    setName('')
  }
}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {
  // если имя пустое - показать ошибку
  if (!name || name.trim() == '') {
    setError('Ошибка! Введите имя!')
  }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  // если нажата кнопка Enter - добавить
  if (e.key === "Enter") {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(e.currentTarget.value) // need to fix
    console.log(e.currentTarget.value)
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = () => {
    let allUsersQuantity;
    if (users) {
      allUsersQuantity = users.length;
    } else {
      allUsersQuantity = 0;
    }
    return allUsersQuantity;
  } // need to fix

  const lastUserName = () => {
    if (name) {
      return name;
    } else {
      return '';
    }
  } // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
