import React from 'react';

const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const loginStates = {
    LOGGED: 0,
    LOGGED_OUT: 1,
  };
  const [isLogged, setIsLogged] = React.useState(loginStates.LOGGED_OUT);
  const loginProviderValue = React.useMemo(() => (
    { isLogged, setIsLogged }), [isLogged, setIsLogged]);
  return (
    <LoginContext.Provider value={loginProviderValue}>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.children}
    </LoginContext.Provider>
  );
};

export {
  LoginContext,
  LoginProvider,
};
