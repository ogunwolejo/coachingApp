/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, useEffect, useLayoutEffect, useMemo} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage } from '../modules/auth'
import { App } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash';
import { ThunkDispatch, current } from '@reduxjs/toolkit'
import { clearError, setUser } from '../../store/redux/auth/auth.slice'
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  
  const dispatch = useDispatch<ThunkDispatch<any,any, any>>()
  const {currentUser} = useSelector((store:any) => ({
    currentUser:store.auth.currentUser
  }))

  if(currentUser) {
    localStorage.setItem('token', currentUser.token)
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }

  useEffect(() => {
    const userExist:string | null = localStorage.getItem('currentUser')
    let storedCurrentUser:string | null = localStorage.getItem('currentUser')
    if(storedCurrentUser) {
      storedCurrentUser = JSON.parse(storedCurrentUser)
      dispatch(setUser(storedCurrentUser))
    }

    dispatch(clearError({}))
  }, [])

  //  // Memoize the value of the currentUser state variable.
   const memoizedCurrentUser = useMemo(() => currentUser, [currentUser]);

   // Use the useLayoutEffect hook to render the PrivateRoute component before the page layout is painted.
   useLayoutEffect(() => {
     dispatch(clearError({}));
   }, [dispatch, memoizedCurrentUser]);

  

  return (
    <BrowserRouter /*basename={PUBLIC_URL}*/>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              {<Route index element={<Navigate to='/dashboard' />} />}
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


// const PrivateRoute:FC<{children:React.ReactElement}> = ({ children }) => {
//   const { currentUser } = useSelector((store: any) => ({
//     currentUser: store.auth.currentUser,
//   }));

//   if (!currentUser) {
//     return <Navigate to="/auth" />;
//   }

//   return children;
// };

export {AppRoutes}
