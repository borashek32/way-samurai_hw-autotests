import React, {SelectHTMLAttributes, DetailedHTMLProps, useState, CSSProperties} from 'react'
import s from './SuperSelect.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: any[]
  onChangeOption?: (id: number) => void
  st?: CSSProperties | undefined
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  st,
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

  const mappedOptions: any = options
    ? options.map((o, index) => (
        <option
          id={'hw7-option-' + o.id}
          className={s.option + ' ' + (value === o.id ? s.activeOption : '')}
          onClick={() => onChangeCallback(o.id)}
          key={o.id}
          // value={value}
          style={st}
          value={o.id}
          // selected={o.id === value}
        >
          {o.value}
        </option>
      )
    )
    : []

  return (
    <div className={s.selectWrapper} onClick={showOptions}>
      <div className={s.select + ' ' + (active ? s.active : "")} defaultValue={1} style={st}>
        <span {...restProps} className={s.selectedOption}>
          {selectedOption && selectedOption}
        </span>

        {active &&
          <div className={s.items}>
            {mappedOptions}
          </div>
        }
      </div>
    </div>
  )
}

export default SuperSelect