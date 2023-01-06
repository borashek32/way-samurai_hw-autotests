import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    setTimerId(date.getTime())
  }

  useEffect(() => {
    if (timerId) {
      debugger
      setTimeout(() => {
        setDate(date)
      }, 1000)
    }
  })
  console.log(new Date(restoreState('hw9-date', Date.now())))

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    setTimerId(undefined)
  }

  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  const stringTime = date.toLocaleTimeString() || <br/>

  const stringDate = (date.getDate() < 10 ? "0" + date.getDate() : '' + date.getDate())
    + "."
    + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : '' + date.getMonth() + 1)
    + "."
    + date.getFullYear()

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = date.getDay() === 0 ? "Sunday"
    : date.getDay() === 1 ? "Monday"
      : date.getDay() === 2 ? "Tuesday"
        : date.getDay() === 3 ? "Wednesday"
          : date.getDay() === 4 ? "Thursday"
            : date.getDay() === 5 ? "Friday"
              : "Saturday" // пишут студенты

  const stringMonth = date.getMonth() === 0 ? "January"
    : date.getMonth() === 1 ? "February"
      : date.getMonth() === 2 ? "March"
        : date.getMonth() === 3 ? "April"
          : date.getMonth() === 4 ? "May"
            : date.getMonth() === 5 ? "June"
              : date.getMonth() === 6 ? "July"
                : date.getMonth() === 7 ? "August"
                  : date.getMonth() === 8 ? "September"
                    : date.getMonth() === 9 ? "October"
                      : date.getMonth() === 10 ? "November"
                        : date.getMonth() === 11 ? "December"
                          : ''  || <br/> // пишут студенты
  
  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
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

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={typeof timerId === "number"} // пишут студенты // задизэйблить если таймер запущен
          xType={'default'}
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={typeof timerId === "undefined"} // пишут студенты // задизэйблить если таймер не запущен
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
