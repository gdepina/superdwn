import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import PropTypes from 'prop-types';
import { signIn } from '../../apis/login-api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage({ key: 'user', defaultValue: {} });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logIn = (data, cb) => {
    signIn(data).then((result) => {
      cb && cb();
      setUser(result.user);
    }).catch((err) => console.log(err));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logOut = () => {
    setUser({});
  };

  const loginProviderValue = useMemo(() => (
    {
      user, setUser, logIn, logOut,
    }), [logIn, logOut, setUser, user]);

  return (
    <AuthContext.Provider value={loginProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  AuthContext,
  AuthProvider,
};
