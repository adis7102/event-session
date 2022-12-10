import React from 'react'

import './styles.scss';

const Duration = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div className="duration">
      <p className="title">{title}</p>
      <div className="input-duration">
        <div className="input-duration-wrap">
          <input
            type="number"
            min="0"
            max="100"
            name="hour"
            onChange={(e) => onChange(e, name)}
            value={value?.hour || 0}
            data-testid="datetime-local"
            required
          />
          <p>Hour</p>
        </div>
        <div className="input-duration-wrap">
          <input
            type="number"
            min="0"
            max="60"
            name="minute"
            onChange={(e) => onChange(e, name)}
            value={value?.minute || 0}
            data-testid="datetime-local"
            required
          />
          <p>Minute</p>
        </div>
        <div className="input-duration-wrap">
          <input
            type="number"
            min="0"
            max="60"
            name="second"
            onChange={(e) => onChange(e, name)}
            value={value?.second || 0}
            data-testid="datetime-local"
            required
          />
          <p>Second</p>
        </div>
      </div>
    </div>
  )
}

export default Duration