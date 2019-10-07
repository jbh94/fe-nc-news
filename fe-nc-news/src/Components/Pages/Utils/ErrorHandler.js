import React from 'react';

const ErrorHandler = ({ status, msg }) => {
  return (
    <div>
      <p>
        {status || '404'} : {msg || 'Page not found!'}
      </p>
    </div>
  );
};

export default ErrorHandler;
