import React, {useState} from 'react'
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
    // setTimeout(setTimerId())
  }

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    // setTimerId()
  }

  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  const currentData = new Date();

  const currentHours = currentData.getHours();
  const currentMinutes = currentData.getMinutes();
  const currentSeconds = currentData.getSeconds();
  const stringTime = currentHours + ":" + currentMinutes + ":" + currentSeconds || <br/>

// 06.01.2022
  const currentYear = currentData.getFullYear();
  const currentMonth = currentData.getMonth();
  const currentDay = currentData.getDate();
  const stringDate = (currentDay < 10 ? "0" + currentDay : '' + currentDay)
    + "."
    + (currentMonth + 1 < 10 ? "0" + (currentMonth + 1) : '' + currentMonth)
    + "."
    + currentYear

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDateFormatter = date.getDay() || <br/> // пишут студенты
  const stringDay = stringDateFormatter === 0 ? "Sunday"
    : stringDateFormatter === 1 ? "Monday"
      : stringDateFormatter === 2 ? "Tuesday"
        : stringDateFormatter === 3 ? "Wednesday"
          : stringDateFormatter === 4 ? "Thursday"
            : stringDateFormatter === 5 ? "Friday"
              : "Saturday"

  const stringMonthFormatter = date.getMonth() || <br/> // пишут студенты
  const stringMonth = stringMonthFormatter === 0 ? "January"
    : stringMonthFormatter === 1 ? "February"
      : stringMonthFormatter === 2 ? "March"
        : stringMonthFormatter === 3 ? "April"
          : stringMonthFormatter === 4 ? "May"
            : stringMonthFormatter === 5 ? "June"
              : stringMonthFormatter === 6 ? "July"
                : stringMonthFormatter === 7 ? "August"
                  : stringMonthFormatter === 8 ? "September"
                    : stringMonthFormatter === 9 ? "October"
                      : stringMonthFormatter === 10 ? "November"
                        : "December"

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
          disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
