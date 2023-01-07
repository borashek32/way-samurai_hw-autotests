import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import styles from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    if (!timerId) {
      const id: number = window.setInterval(() => {
        setDate(new Date())
      }, 1000)
      setTimerId(id)
    }
  }
  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    if(timerId){
      clearInterval(timerId)
      setTimerId(undefined)
    }
  }

  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  const stringTime = date.toLocaleTimeString() || <br/>

  // const stringDate = date.toLocaleDateString() // 10/02/2022
  const stringDate = (date.getDate() < 10 ? "0" + date.getDate() : '' + date.getDate())
    + "."
    + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : '' + date.getMonth() + 1)
    + "."
    + date.getFullYear() // 10.02.2022

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const stringDay = weekDay[date.getDay()] // пишут студенты

  const yearMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const stringMonth = yearMonth[date.getMonth()]  || <br/> // пишут студенты
  
  return (
    <div className={styles.clock}>
      <div
        id={'hw9-watch'}
        className={styles.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={styles.more}>
          {show ? (
            <>
              <span id={'hw9-date'}>{stringDate}</span>,{' '}
              <span id={'hw9-month'}>{stringMonth}</span>
            </>
          ) : (
            <>
              <br/>
            </>
          )}
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          xType={'default'}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
          xType={'default'}
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>


    </div>
  )
}

export default Clock
