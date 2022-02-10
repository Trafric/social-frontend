import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};
// const INITIAL_STATE = {
//   user: {
//     username: 'Mike',
//     email: 'mike@test.com',
//     password: '$2a$10$FMcQTuc6rvFsqFsjPizfzO2d79VNEz7f35EKFKaHcpqyHYyjmfrRK',
//     profilePicture: '',
//     coverPicture: '',
//     followers: [],
//     followings: [],
//     isAdmin: false,
//     desc: 'Here is my profile',
//     city: 'Kigali',
//     from: 'Gabon',
//     relationship: 0,
//     _id: '62053c433aa7c844c5a61f20',
//     createdAt: '2022-02-10T16:24:35.758Z',
//     updatedAt: '2022-02-10T16:24:35.758Z',
//     __v: 0,
//   },
//   isFetching: false,
//   error: false,
// };

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
