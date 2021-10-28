import React from 'react';
import context from './myContext';

const Context = ({ children }) => {

  const contextValue = {

  }

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

export default Context;