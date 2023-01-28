import React, {useEffect, useState} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import s3 from './../hw07/common/c5-SuperSelect/SuperSelect.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {OptionType} from "../hw07/HW7";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes: OptionType[] = [
  {id: 1, value: 'light'},
  {id: 2, value: 'blue'},
  {id: 3, value: 'dark'},
]

const HW12 = () => {
  // взять ид темы из редакса
  const [themeId, setThemeId] = useState(1)
  const dispatch = useDispatch()

  const change = (id: number) => { // дописать функцию
    debugger
    const t = dispatch(changeThemeId(id))
    setThemeId(t.id)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  return (
    <div id={"hw12"}>
      <div className={s2.container}>
        <div className={s2.hwTitle}>Homework #12</div>
      </div>
      <hr/>
      {/*демонстрация возможностей компонент:*/}
      <div className={s2.container}>
        <div className={s.container}>

          <div className={s2.hw}>
            <p className={s.titleName}>Выберите тему</p>
            <select className={s3.select}>
              {themes.map(t => {

                return (
                  <option key={t.id} onClick={() => change(t.id)}>{t.value}</option>
                )
              })}
            </select>
            {/*<SuperSelect*/}
            {/*  id={'hw12-select-theme'}*/}
            {/*  className={s.select}*/}
            {/*  // сделать переключение тем*/}
            {/*  onChange={change}*/}
            {/*  options={themes}*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW12
