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
import AuthThunk from '../../store/redux/auth/thunk'
import {BarLoader, CircleLoader} from 'react-spinners'


const AppRoutes: FC = () => {
  
  // const dispatch = useDispatch<ThunkDispatch<any,any, any>>()
  
  // const {isAuth, loading} = useSelector((store:any) => ({
  //   isAuth:store.auth.isAuth,
  //   loading:store.auth.loading
  // }))

  
  //  // Use the useLayoutEffect hook to render the PrivateRoute component before the page layout is painted
  //  const fetch = async(token:string) => {
  //     try {
  //       await dispatch(AuthThunk.authByTokenThunk({token}))
  //     } catch (error) {
  //       console.error(error)
  //     }
  //  } 
   
  //  useLayoutEffect(() => {
  //     if(isAuth) {
  //       return 
  //     }
  //     // when it is undefined
  //     const userExist:string | null = localStorage.getItem('token')
  //     if(userExist) {
  //       fetch(userExist)
  //     }
  //  }, [isAuth]);

  

  return (
      <BrowserRouter /*basename={PUBLIC_URL}*/>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          <Route path='/*' element={<PrivateRoutes />} />
          <Route index element={<Navigate to='/dashboard' />} />
          <Route path='auth/*' element={<AuthPage />} />
          <Route path='*' element={<Navigate to='/auth' />} />
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
