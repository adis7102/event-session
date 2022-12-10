import React from "react";

import './styles.scss';

const ErrorMessage = (props) => {
  const { message } = props;

  return (
    <div className="error-message">
      Error, Invalid data. please make sure "{message}" have a correct
        data!
    </div>
  );
};

export default ErrorMessage;
