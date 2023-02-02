import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import s3 from './../hw07/common/c5-SuperSelect/SuperSelect.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../hw10/bll/store';
import {OptionType} from "../hw07/HW7";
import {changeThemeId} from "./bll/themeReducer";

const themes: OptionType[] = [
  {id: 1, value: 'light'},
  {id: 2, value: 'blue'},
  {id: 3, value: 'dark'},
]

const HW12 = () => {
  // взять ид темы из редакса
  const themeId = useSelector<AppStoreType, number>(state => state.theme.id)
  const dispatch = useDispatch()

  const change = (id: number) => { // дописать функцию
    dispatch(changeThemeId(id))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  const select = s3.select + " " + s.select

  return (
    <div id={"hw12"}>
      <div className={s2.container}>
        <div className={s2.hwTitle}>Homework №12</div>
      </div>
      <hr/>
      {/*демонстрация возможностей компонент:*/}
      <div className={s2.container}>
        <div className={s.container}>
          <div className={s2.hw}>
            <p className={s.titleName}>Выберите тему</p>
            <SuperSelect
              id={'hw12-select-theme'}
              className={select}
              // сделать переключение тем
              onChangeOption={change}
              options={themes}
              value={themeId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW12
