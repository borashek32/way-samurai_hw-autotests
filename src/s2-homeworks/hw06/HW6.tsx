import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import {restoreState, saveState} from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
  const [value, setValue] = useState<string>('')

  const save = () => {
    saveState<string>('hw6-editable-span-value', value)
  }
  const restore = () => {
    // делают студенты
    setValue(restoreState<string>('hw6-editable-span-value', value))
  }

  return (
    <div id={'hw6'}>
      <div className={s2.container} style={{paddingTop: "40px"}}>
        <div className={s2.hwTitle}>Homework №6</div>
      </div>
      <hr/>
      <div className={s2.container}>
        <div className={s2.hw}>
          {/*демонстрация возможностей компоненты:*/}
          <SuperEditableSpan
            id={'hw6-spanable-input'}
            value={value}
            onChangeText={setValue}
            spanProps={{
              id: 'hw6-editable-span',
              defaultText: 'Enter text...',
            }}
          />

          <div className={s.buttonsContainer}>
            <SuperButton
              id={'hw6-save'}
              onClick={save}
              xType={"default"}
            >
              Save to ls
            </SuperButton>
            <SuperButton
              id={'hw6-restore'}
              onClick={restore}
              xType={'secondary'}
            >
              Get from ls
            </SuperButton>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default HW6
