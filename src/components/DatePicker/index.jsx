import React from 'react';
import cn from 'classnames';

const DatePicker = (props) => {
  const { name, title, onChange, onReset, value } = props;

  return (
    <div className="input">
      <p className="title">{title}</p>
      <div className="input-wrap">
        <input
          type="date"
          name={name}
          onChange={(e) => onChange(e?.target?.value)}
          value={value}
          data-testid="date-picker"
        />
        <div
          className={cn("reset-button", {
            disabled: !value
          })}
          onClick={() => onReset()}
        >
          <p>reset date</p>
        </div>
      </div>
    </div>
  )
}

export default DatePicker