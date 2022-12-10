import React from 'react';

import './styles.scss';

const DeleteOverlay = (props) => {
  const { onClick } = props;

  return (
    <div className="delete-overlay" onClick={() => onClick()}>DeleteOverlay</div>
  )
}

export default DeleteOverlay