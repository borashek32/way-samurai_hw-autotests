import React, {SelectHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import svg from "./chevron-down.svg"
import s from './SuperSelect.module.css'
import {OptionType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: OptionType[]
  onChangeOption?: (id: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                       options,
                                                       className,
                                                       onChange,
                                                       value,
                                                       onChangeOption,
                                                       ...restProps
                                                     }) => {

  const [active, setActive] = useState(false)
  const showOptions = () => setActive(!active)

  const onChangeCallback = (id: number) => {
    if (onChangeOption) {
      onChangeOption(id)
      setActive(!active)
    }
  }
  const selectedOption = options.filter(o => o.id === value)[0].value

  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option
          id={'hw7-option-' + o.id}
          className={s.option + ' ' + (value === o.id ? s.activeOption : '')}
          onClick={() => onChangeCallback(o.id)}
          key={o.id}
          value={o.id}
          selected={o.id === value}
        >
          {o.value}
        </option>
      )
    )
    : []

  return (
    <div className={s.selectWrapper}>
      <select
        className={s.select + (active ? ' ' + s.active : '')}
        {...restProps}
        onClick={showOptions}
      >
      </select>
      <p className={s.selectedOption}>{selectedOption}</p>
      {active && mappedOptions}
    </div>
  )
}

export default SuperSelect