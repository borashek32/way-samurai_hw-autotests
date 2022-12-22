import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent, SetStateAction,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: any[]
  onChangeOption?: (option: SetStateAction<number>) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                       options,
                                                       className,
                                                       onChange,
                                                       value,
                                                       onChangeOption,
                                                       ...restProps
                                                     }) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
      <option
        id={'hw7-option-' + o.id}
        className={s.option}
        key={o.id}
        value={o.id}
        selected={o.id === value}
      >
        {o.value}
      </option>
    ))
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты
    if (onChangeOption) {
      onChangeOption(e.currentTarget.selectedIndex + 1)
    }
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect