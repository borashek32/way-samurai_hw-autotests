import React, {useEffect, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const options: any[] = [
  {id: 1, value: 'Pre-junior'},
  {id: 2, value: 'Junior'},
  {id: 3, value: 'Junior +'},
] // value может быть изменено

const HW7 = () => {
  const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно

  const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [])

  return (
    <div id={'hw7'}>
      <div className={s2.container}>
        <div className={s2.hwTitle}>Homework №7</div>
      </div>
      <hr/>
      {/*демонстрация возможностей компонент:*/}
      <div className={s2.container}>
        <div className={s2.hw}>
          <div className={s.selectContainer}>
            <div>
              <SuperSelect
                id={'hw7-super-select'}
                options={options}
                value={value}
                onChangeOption={onChangeOption}
                st={{width: "180px", appearance: "none"}}
              />
            </div>
            <div>
              <SuperRadio
                id={'hw7-super-radio'}
                name={'hw7-radio'}
                options={options}
                value={value}
                onChangeOption={onChangeOption}
              />
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default HW7
