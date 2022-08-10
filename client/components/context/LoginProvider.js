import React from 'react';
import PropTypes from 'prop-types';

const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const loginStates = {
    LOGGED: 0,
    LOGGED_OUT: 1,
  };

  const [isLogged, setIsLogged] = React.useState(loginStates.LOGGED_OUT);

  const loginProviderValue = React.useMemo(() => (
    { isLogged, setIsLogged }), [isLogged]);

  return (
    <LoginContext.Provider value={loginProviderValue}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  LoginContext,
  LoginProvider,
};
