import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент
  // const isLoading = false

  const isLoading = useSelector<AppStoreType>(state => state.loading)
  const dispatch = useDispatch()

  const setLoading = (isLoading: boolean) => { // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    setTimeout(() => {
      dispatch(loadingAC(isLoading))
    }, 1500)
    // setTimeout
  }

  // const [isLoading, setLoading] = useState(false)

  return (
    <div id={'hw10'}>
      <div className={s2.container} style={{paddingTop: "40px"}}>
        <div className={s2.hwTitle}>Homework #10</div>
      </div>
      <hr/>
      {/*демонстрация возможностей компонент:*/}
      <div className={s2.container}>
        <div className={s2.hw}>
          {isLoading ? (
            <div id={'hw10-loading'}>
              <Loader/>
            </div>
          ) : (
            <SuperButton
              id={'hw10-button-start-loading'}
              xType={'default'}
              onClick={() => setLoading}
            >
              Set loading...
            </SuperButton>
          )}
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default HW10
