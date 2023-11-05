import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import {EmailVerification} from './components/EmailVerification'
import {CheckEmail} from './components/CheckEmail'
import { LoginByMobile} from './components/Login.mobile'
import { ChangePassword } from './components/chnagePassword'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='login-mobile' element={<LoginByMobile />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='change-password' element={<ChangePassword />} />
      <Route path='email-verification' element={<EmailVerification />} />
      <Route path="check-email" element={<CheckEmail/>}/>
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
