import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import {EmailVerification} from './components/EmailVerification'
import {CheckEmail} from './components/CheckEmail'
import {Admin} from './components/Admin'
import {EmployeeLogin} from "./components/EmployeeLogin";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='/admin/login' element={<Admin />} />
      <Route path='/employee/login' element={<EmployeeLogin />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='email-verification' element={<EmailVerification />} />
      <Route path="check-email" element={<CheckEmail/>}/>
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
